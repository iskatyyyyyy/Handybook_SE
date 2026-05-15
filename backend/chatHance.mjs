import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

export async function askHance(question) {
  console.log(`💬 User: ${question}`);

  try {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const embedModel = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
    const embedResult = await embedModel.embedContent({
      content: { parts: [{ text: question }] },
      taskType: "RETRIEVAL_QUERY",
      outputDimensionality: 768,
    });
    const queryVector = embedResult.embedding.values;

    const { data: matches, error } = await supabase.rpc('match_handbook_sections', {
      query_embedding: queryVector,
      match_threshold: 0.5,
      match_count: 5,
    });

    if (error) throw error;

    const contextText = matches.map(m => m.content).join("\n\n---\n\n");

    const chatModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Refined for Strict CommonMark compliance
    const systemPrompt = `
      You are "Hance," the official TUP Manila AI Assistant. 
      Your goal is to provide a response that is visually structured, professional, and easy to read.

      ### **STRICT INTENT RULES**
      - If the user says "Hello", "Hi", "Hey", or asks conversational questions (e.g., "How are you?"), you MUST respond EXACTLY with:
        "I am sorry, I am only an informational AI not a conversational one, did you mean to ask for [SUGGESTED TOPIC]?"
      - Replace [SUGGESTED TOPIC] with a relevant topic found in the provided handbook context (e.g., "haircut policies" or "enrollment procedures").
      - Do NOT provide handbook summaries for simple greetings.
      - NEVER introduce yourself or say "Hello! I am Hance."

      ### **COMMONMARK STRUCTURE RULES**
      - Use only valid markdown syntax.
      - Never write placeholder words like "CONTEXT".
      - Use blank lines between paragraphs.
      - Use "##" for major headings.
      - Use "###" for subheadings.
      - Use "-" for bullet lists.
      - Use "---" only as a standalone horizontal rule.
      - Do not manually align text with spaces.
      - Do not use HTML.
      - Do not write consecutive single-line sentences unless using a list.
      - Keep related sentences inside proper paragraphs.
      - Avoid excessive bold formatting.

      ### **RESPONSE ARCHITECTURE**
      - Start with a Level 2 Header (##) that titles the answer.
      - If a section contains penalties or steps, use a list.
      - Use a horizontal rule (---) before "Sanctions" or "Disciplinary Action" sections to provide a clear visual break.
      - Keep the tone helpful but concise. No greetings.

      CONTEXT: ${contextText}
    `;

    function normalizeMarkdown(text) {
      return text
        // Remove any LLM-hallucinated "Hello" if it slips through
        .replace(/^Hello!.*Assistant\./i, '') 

        // Force double newlines between any block elements
        .replace(/\n(#{1,6}\s)/g, '\n\n$1') 
        .replace(/\n([-*]\s)/g, '\n\n$1')

        // Ensure paragraphs have 2 newlines between them
        .replace(/([^\n])\n([^\n])/g, '$1\n\n$2') 

        // Remove stray CONTEXT artifacts
        .replace(/\bCONTEXT\b/g, '')

        // Normalize Windows line endings
        .replace(/\r\n/g, '\n')

        // Prevent triple+ newlines
        .replace(/\n{3,}/g, '\n\n')

        // Ensure headers have spacing before them
        .replace(/\n(#{1,6}\s)/g, '\n\n$1')

        // Ensure lists have spacing before them
        .replace(/\n([-*]\s)/g, '\n\n$1')

        // Ensure horizontal rules are isolated
        .replace(/\n?---\n?/g, '\n\n---\n\n')

        // Trim excess whitespace
        .trim();
    }

    const result = await chatModel.generateContent([systemPrompt, question]);
    const rawText = result.response.text();
    const textResponse = normalizeMarkdown(rawText);

    

    console.log("\n--- RAW COMMONMARK OUTPUT ---");
    console.log(textResponse);
    console.log("-----------------------------\n");

    return {
      reply: textResponse,
      source: matches[0]?.metadata?.source || "TUP Handbook",
      sectionId: matches[0]?.metadata?.sectionId || null 
    };
  } catch (error) {
    console.error("Hance Error:", error);
    return { reply: "I encountered an error retrieving that information.", source: null };
  }
}