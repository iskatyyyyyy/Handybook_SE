import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

export async function askHance(question) {
  console.log(`💬 User: ${question}`);

  try {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // 1. Convert question to vector (Retrieval phase)
    const embedModel = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
    const embedResult = await embedModel.embedContent({
      content: { parts: [{ text: question }] },
      taskType: "RETRIEVAL_QUERY",
      outputDimensionality: 768,
    });
    const queryVector = embedResult.embedding.values;

    // 2. Fetch context from Supabase
    const { data: matches, error } = await supabase.rpc('match_handbook_sections', {
      query_embedding: queryVector,
      match_threshold: 0.5,
      match_count: 5, // We'll take 5 chunks for better context
    });

    if (error) throw error;

    // 3. Assemble the context string
    const contextText = matches.map(m => m.content).join("\n\n---\n\n");

    // 4. Generation Phase[cite: 1]
    const chatModel = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const systemPrompt = `
      You are "Hance," the TUP Manila AI Assistant.
      
      FORMATTING RULES:
      - Use ### for Section Headings.
      - Use **bold** for rules or offenses.
      - Use - for bullet points.
      - Use double line breaks between paragraphs.

      CONTEXT: ${contextText}
    `;

    const result = await chatModel.generateContent([systemPrompt, question]);
    const response = await result.response;
    const finalAnswer = response.text();
    
    console.log(`\n🤖 Hance: ${response.text()}`);
    return finalAnswer;

  } catch (err) {
    console.error("💥 Chat failed:", err.message);
    throw err;
  }
}

