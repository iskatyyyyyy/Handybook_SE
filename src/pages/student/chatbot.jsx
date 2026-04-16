import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreVertical, Bot } from 'lucide-react';
import ChatBubble from '../../components/chat/chatBubble';
import HanceInput from '../../components/chat/hanceInput'; // Use your uploaded component
import { useChatUI } from '../../hooks/useChatUI'; // Use your uploaded hook

const Chatbot = () => {
  const navigate = useNavigate();
  const { messages, isTyping, sendMessage } = useChatUI();

  return (
    <div className="flex flex-col h-screen bg-tup-bg font-sans text-tup-navy">
      <header className="flex items-center justify-between bg-white px-4 py-4 border-b border-gray-100 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-tup-green" />
          </button>
          <h1 className="text-base font-bold leading-none">Hance Assistant</h1>
        </div>
        <button className="p-1 text-gray-400"><MoreVertical size={20} /></button>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-4 pb-24">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <div className="w-20 h-20 bg-tup-soft-green rounded-full flex items-center justify-center border-4 border-white shadow-inner">
               <Bot size={40} className="text-tup-green" />
            </div>
            <h2 className="text-2xl font-black text-tup-navy">How can I help you, Andrea?</h2>
          </div>
        ) : (
          messages.map((msg, index) => <ChatBubble key={index} message={msg} />)
        )}
        {isTyping && <p className="text-[10px] font-black text-tup-green animate-pulse ml-4 uppercase">Hance is typing...</p>}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md">
        <HanceInput onSendMessage={sendMessage} disabled={isTyping} />
      </footer>
    </div>
  );
};

export default Chatbot;