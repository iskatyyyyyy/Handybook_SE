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
  
  try {
    const hanceData = await askHance(message);
    
    // Log the full metadata object for auditing
    console.log("📡 API DATA SENT:", JSON.stringify(hanceData, null, 2));
    
    res.json(hanceData); 
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ error: "Brain offline" });
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

app.post('/api/log-coordinates', (express.json()), (req, res) => {
  const { x, y, z, label } = req.body;
  
  // This is what prints to your VS Code Terminal
  console.log('-----------------------------------');
  console.log(`📍 NEW MARKER FOR: ${label || 'Unknown'}`);
  console.log(`Position: [${x}, ${y}, ${z}]`);
  console.log('-----------------------------------');
  
  res.status(200).send('Logged to terminal');
});