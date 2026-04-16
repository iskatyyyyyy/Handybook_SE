import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreVertical, Bot } from 'lucide-react';
import ChatBubble from '../../components/chat/chatBubble';
import HanceInput from '../../components/chat/hanceInput'; 
import { useChatUI } from '../../hooks/useChatUI'; 

const Chatbot = () => {
  const navigate = useNavigate();
  // The hook manages the simulated AI logic
  const { messages, isTyping, sendMessage } = useChatUI();

  return (
    <div className="flex flex-col h-screen bg-tup-bg font-sans text-tup-navy">
      {/* 1. Navigation Header */}
      <header className="flex items-center justify-between bg-white px-4 py-4 border-b border-gray-100 shadow-sm z-10">
        <div className="flex items-center gap-3">
          {/* Back button returns to the previous page (usually Home) */}
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-tup-green" />
          </button>
          <h1 className="text-base font-bold leading-none">Hance Assistant</h1>
        </div>
        <button className="p-1 text-gray-400"><MoreVertical size={20} /></button>
      </header>

      {/* 2. Dynamic Message Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-4 pb-24">
        {messages.length === 0 ? (
          /* Empty State: Greeting for the user */
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-tup-soft-green rounded-full flex items-center justify-center border-4 border-white shadow-inner">
               <Bot size={40} className="text-tup-green" />
            </div>
            <h2 className="text-2xl font-black text-tup-navy">How can I help you, Andrea?</h2>
            <p className="text-xs text-gray-400 font-medium px-10">Ask me about grades, attendance policies, or shifting procedures.</p>
          </div>
        ) : (
          /* Conversation History */
          messages.map((msg, index) => <ChatBubble key={index} message={msg} />)
        )}
        
        {/* Visual Feedback: Mimics AI processing time */}
        {isTyping && (
          <p className="text-[10px] font-black text-tup-green animate-pulse ml-4 uppercase tracking-widest">
            Hance is typing...
          </p>
        )}
      </main>

      {/* 3. Footer Input */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-50">
        <HanceInput onSendMessage={sendMessage} disabled={isTyping} />
      </footer>
    </div>
  );
};

export default Chatbot;