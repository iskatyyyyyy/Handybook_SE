import { useState } from 'react';

export const useChatUI = () => {

  const [messages, setMessages] = useState([
    {
      text: "👋 Hello Andrea! I am Hance, your official TUP Manila AI Assistant. How can I help you navigate the student handbook today?",
      isBot: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text) => {
    const userMessage = { 
      text, 
      isBot: false, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      const botMessage = {
        text: data.reply,
        isBot: true,
        source: data.source,
        sectionId: data.sectionId,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Connection error.", isBot: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, isTyping, sendMessage };
};