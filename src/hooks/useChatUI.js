import { useState } from 'react';
import { FrequentlyAskedQuestions } from '../constants/handbookData';

export const useChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text) => {
    const userMessage = { text, isBot: false, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMessage]);

    setIsTyping(true);

    // Simulate Hance "thinking"
    setTimeout(() => {
      const match = FrequentlyAskedQuestions.find(faq => 
        text.toLowerCase().includes(faq.question.toLowerCase().split(' ')[0])
      );

      const botMessage = {
        text: match ? match.answer : "I'm not sure about that. Would you like me to escalate this to the Registrar?",
        isBot: true,
        source: match ? match.source : null,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return { messages, isTyping, sendMessage };
};