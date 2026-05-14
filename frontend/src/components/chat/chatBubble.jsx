import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; // Import the library

const ChatBubble = ({ message }) => {
  const navigate = useNavigate();

  const handleSourceClick = () => {
    if (message.sectionId) {
      navigate(`/guide#${message.sectionId}`);
    }
  };

  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4 animate-in slide-in-from-bottom-2 duration-300`}>
      <div className={`max-w-[85%] p-4 rounded-[1.5rem] shadow-sm ${
        message.isBot 
          ? 'bg-white border border-gray-100 text-tup-navy rounded-bl-none' 
          : 'bg-tup-green text-white shadow-tup-green/10 rounded-br-none'
      }`}>
        {/* Use ReactMarkdown for formatting */}
        <div className="text-sm font-medium leading-relaxed prose prose-sm max-w-none">
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </div>
        
        {message.isBot && message.source && (
          <button 
            onClick={handleSourceClick}
            className="mt-3 flex items-center gap-1.5 text-[10px] font-black text-tup-green bg-tup-soft-green/50 px-2.5 py-1.5 rounded-lg hover:bg-tup-green hover:text-white transition-all active:scale-95 group"
          >
            <ExternalLink size={10} className="opacity-50 group-hover:opacity-100" />
            VIEW SOURCE: {message.source.toUpperCase()}
          </button>
        )}

        <p className={`text-[9px] mt-2 font-bold opacity-30 ${message.isBot ? 'text-tup-navy' : 'text-white'}`}>
          {message.time || "JUST NOW"}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;