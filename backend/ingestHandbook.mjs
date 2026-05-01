import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import dotenv from 'dotenv';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pdf = require('pdf-parse-fork');
dotenv.config();

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// 1. New Chunking Function with Overlap
function chunkText(text, size = 1000, overlap = 200) {
  const chunks = [];
  let i = 0;
  while (i < text.length) {
    chunks.push(text.slice(i, i + size));
    i += (size - overlap); // Move forward but keep the overlap
  }
  return chunks;
}

async function runIngestion() {
  console.log("🚀 Starting Ingestion with 20% Overlap...");

  try {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const dataBuffer = fs.readFileSync('./documents/TUP Student Handbook.pdf');
    const pdfData = await pdf(dataBuffer);

    // 2. Generate the overlapping chunks
    const chunks = chunkText(pdfData.text, 1000, 200);
    console.log(`📦 Created ${chunks.length} overlapping chunks.`);

    const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });

    for (let i = 0; i < chunks.length; i++) {
      const textSnippet = chunks[i];

      // 3. Generate Embedding with correct schema & dimensions[cite: 6]
      const result = await model.embedContent({
        content: { parts: [{ text: textSnippet }] },
        taskType: "RETRIEVAL_DOCUMENT",
        outputDimensionality: 768, 
      });
      const vector = result.embedding.values;

      // 4. Store in Supabase[cite: 1]
      const { error } = await supabase
        .from('handbook_sections')
        .insert({
          content: textSnippet,
          embedding: vector,
          metadata: { 
            source: "2013 Revised Handbook", 
            chunk_index: i,
            is_overlap: true 
          }
        });

      if (error) {
        console.error(`\n❌ Error on chunk ${i}:`, error.message);
      } else {
        process.stdout.write(`✅ Progress: ${Math.round(((i + 1) / chunks.length) * 100)}% (${i + 1}/${chunks.length})\r`);
      }

      await delay(1500); // Prevent 429 Rate Limits[cite: 6]
    }

    console.log("\n✨ Success! The handbook is now seamlessly stored.");
  } catch (err) {
    console.error("\n💥 Ingestion failed:", err.message);
  }
}

runIngestion();