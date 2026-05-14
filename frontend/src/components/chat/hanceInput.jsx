import React, { useState } from 'react';
import { Paperclip, SendHorizontal, Sparkles } from 'lucide-react';

const HanceInput = ({ onSendMessage, disabled }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText("");
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="relative flex items-center gap-2 max-w-4xl mx-auto w-full group"
    >
      <div className="relative flex-1">
        <button 
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-tup-green transition-colors"
        >
          <Paperclip size={20} />
        </button>
        
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask Hance about university policies..." 
          className="w-full bg-white border border-gray-100 rounded-[1.5rem] py-4 pl-12 pr-14 text-sm font-medium shadow-sm outline-none focus:ring-4 focus:ring-tup-green/5 focus:border-tup-green/20 transition-all"
          disabled={disabled}
        />

        {/* AI Branding Indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-20 pointer-events-none">
          <Sparkles size={14} className="text-tup-green" />
        </div>
      </div>

      <button 
        type="submit"
        disabled={!text.trim() || disabled}
        className={`p-4 rounded-2xl shadow-lg transition-all active:scale-90 ${
          text.trim() 
          ? 'bg-tup-green text-white shadow-tup-green/20' 
          : 'bg-gray-100 text-gray-300'
        }`}
      >
        <SendHorizontal size={20} />
      </button>
    </form>
  );
};

export default HanceInput;