import React, { useState } from 'react';
import { ChevronLeft, MoreVertical, Paperclip, SendHorizontal, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ChatBubble from '../../components/chat/chatBubble';

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]); // Empty for "Welcome" state

  const suggestions = [
    "Grading policy?", "Library hours?", "Enrollment guide", "Campus map"
  ];

  return (
    <div className="flex flex-col h-screen bg-tup-bg font-sans text-tup-navy">
      
      {/* 1. CHAT HEADER */}
      <header className="flex items-center justify-between bg-white px-4 py-4 border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-tup-green" />
          </button>
          <div>
            <h1 className="text-base font-bold leading-none">Handybook Assistant</h1>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="h-2 w-2 rounded-full bg-tup-green animate-pulse"></div>
              <span className="text-[10px] font-medium text-tup-green uppercase tracking-wider">Always active</span>
            </div>
          </div>
        </div>
        <button className="p-1 text-gray-400"><MoreVertical size={20} /></button>
      </header>

      {/* 2. CHAT AREA */}
      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          /* Welcome/Empty State */
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 bg-tup-soft-green rounded-full flex items-center justify-center border-4 border-white shadow-inner">
               <Bot size={40} className="text-tup-green" />
            </div>
            <div>
              <h2 className="text-2xl font-black">Welcome to Handybook</h2>
              <p className="text-gray-500 text-sm mt-2 max-w-[250px]">
                I'm here to help you with TUP Manila campus info, policies, and more.
              </p>
            </div>

            {/* Suggestion Chips */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {suggestions.map((text) => (
                <button 
                  key={text}
                  className="px-4 py-3 bg-white border border-tup-soft-green rounded-2xl text-xs font-bold text-tup-navy hover:border-tup-green hover:bg-tup-soft-green transition-all shadow-sm"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Active Chat State */
          messages.map((msg, index) => (
            <ChatBubble key={index} {...msg} />
          ))
        )}
      </main>

      {/* 3. INPUT AREA */}
      <footer className="p-4 bg-white/80 backdrop-blur-md border-t border-gray-100">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-tup-green transition-colors">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Ask Handybook anything..." 
              className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-tup-green/20 outline-none"
            />
          </div>
          <button className="bg-tup-green text-white p-4 rounded-2xl shadow-lg shadow-tup-green/20 active:scale-90 transition-transform">
            <SendHorizontal size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Chatbot;