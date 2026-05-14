import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { askHance } from './chatHance.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); 
app.use(express.json());

/**
 * Chat Endpoint
 * Receives: { "message": "User's question" }
 * Returns: { "reply": "Hance's response" }
 */
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  console.log(`Incoming request: "${message}"`);

  try {
    // Call the RAG logic we built in chatHance.mjs[cite: 1, 8]
    const aiResponse = await askHance(message);
    
    res.json({ reply: aiResponse });
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ 
      error: "Hance is currently unavailable. Please try again later.",
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: "Hance's brain is online and healthy." });
});

app.listen(PORT, () => {
  console.log(`
  Hance Backend is live!
  URL: http://localhost:${PORT}
  Endpoint: http://localhost:${PORT}/api/chat
  `);
});