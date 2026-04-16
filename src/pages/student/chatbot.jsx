import React from 'react';
import { ChevronLeft, MoreVertical, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ChatBubble from '../../components/chat/chatBubble';
import HanceInput from '../../components/chat/hanceInput'; // Use your custom input
import { useChatUI } from '../../hooks/useChatUI'; // Use your custom hook

const Chatbot = () => {
  const navigate = useNavigate();
  const { messages, isTyping, sendMessage } = useChatUI(); // Hook logic

  const suggestions = ["Grading policy?", "Library hours?", "Enrollment guide"];

  return (
    <div className="flex flex-col h-screen bg-tup-bg font-sans text-tup-navy">
      <header className="flex items-center justify-between bg-white px-4 py-4 border-b border-gray-100 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}><ChevronLeft size={24} className="text-tup-green" /></button>
          <div>
            <h1 className="text-base font-bold leading-none">Hance Assistant</h1>
            <span className="text-[10px] font-medium text-tup-green uppercase">AI Powered</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-4 pb-24">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <div className="w-20 h-20 bg-tup-soft-green rounded-full flex items-center justify-center border-4 border-white shadow-inner">
               <Bot size={40} className="text-tup-green" />
            </div>
            <h2 className="text-2xl font-black">Ask Hance</h2>
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {suggestions.map(s => (
                <button key={s} onClick={() => sendMessage(s)} className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold shadow-sm">{s}</button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((msg, i) => <ChatBubble key={i} message={msg} />)
        )}
        {isTyping && <div className="text-[10px] font-black text-tup-green animate-pulse ml-4 uppercase">Hance is typing...</div>}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md">
        <HanceInput onSendMessage={sendMessage} disabled={isTyping} />
      </footer>
    </div>
  );
};

export default Chatbot;