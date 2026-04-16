import React from 'react';
import { Bot, User } from 'lucide-react';

const ChatBubble = ({ message, isBot, source, time }) => {
  return (
    <div className={`flex items-start gap-3 mb-6 ${isBot ? 'flex-row' : 'flex-row-reverse animate-fade-in'}`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
        isBot ? 'bg-tup-soft-green text-tup-green' : 'bg-tup-navy text-white'
      }`}>
        {isBot ? <Bot size={18} /> : <User size={18} />}
      </div>

      {/* Message Content */}
      <div className={`max-w-[75%] space-y-1 ${!isBot && 'flex flex-col items-end'}`}>
        <div className={`p-4 text-sm leading-relaxed shadow-sm ${
          isBot 
            ? 'bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl rounded-tl-none text-tup-navy' 
            : 'bg-tup-green text-white rounded-2xl rounded-tr-none'
        }`}>
          {message}
          
          {isBot && source && (
            <div className="mt-3">
              <span className="text-[10px] font-bold tracking-wider text-tup-green bg-tup-soft-green px-2 py-1 rounded-md uppercase">
                Source: {source}
              </span>
            </div>
          )}
        </div>
        <span className="text-[10px] text-gray-400 px-1">{time}</span>
      </div>
    </div>
  );
};

export default ChatBubble;