import { useState } from 'react';

export const useChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text) => {
    // 1. Add User Message to local state
    const userMessage = { 
      text, 
      isBot: false, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // 2. Call the Hance Backend established in Stage 1
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) throw new Error("Backend connection failed");
      const data = await response.json();

      // 3. Add Hance's response with metadata for deep linking
      const botMessage = {
        text: data.reply,
        isBot: true,
        source: data.source,
        sectionId: data.sectionId,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        text: "I'm having trouble connecting to my brain right now. Is the backend server running?", 
        isBot: true, 
        time: new Date().toLocaleTimeString() 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, isTyping, sendMessage };
};