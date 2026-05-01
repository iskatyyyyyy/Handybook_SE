import dotenv from 'dotenv';
dotenv.config();

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  // We query the v1beta endpoint to see what's available
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  console.log("🔍 Querying Google AI for available models...");

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.models) {
      console.log("\n--- Models that support Embedding ---");
      data.models.forEach(model => {
        // We only care about models that can perform 'embedContent'
        if (model.supportedGenerationMethods.includes('generateContent')) {
          console.log(`✅ Name: ${model.name}`);
          console.log(`   Display Name: ${model.displayName}`);
          console.log('------------------------------------------');
        }
      });
    } else {
      console.error("❌ No models found. Check if your API key is correct in .env:", data);
    }
  } catch (error) {
    console.error("💥 Fetch failed:", error.message);
  }
}

listModels();