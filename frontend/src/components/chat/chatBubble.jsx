import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const ChatBubble = ({ message }) => {
  const navigate = useNavigate();

  const handleSourceClick = () => {
    if (message.sectionId) {
      navigate(`/guide#${message.sectionId}`);
    }
  };

  return (
    <div className={`flex w-full mb-6 ${message.isBot ? 'justify-start' : 'justify-end'}`}>
      
      <div 
        className={`max-w-[85%] sm:max-w-[75%] p-5 shadow-sm transition-all ${
          message.isBot 
            ? 'bg-white border border-slate-100 text-slate-700 rounded-3xl rounded-tl-sm' 
            : 'bg-handy-dark-red text-white rounded-3xl rounded-tr-sm'
        }`}
      >
        
        {/* If it's a user message, render normal text. If bot, render markdown. */}
        {!message.isBot ? (
           <p className="text-sm font-medium leading-relaxed">{message.text}</p>
        ) : (
          <div className={`
            text-sm font-medium leading-relaxed break-words
            prose max-w-none
            ${message.isBot ? 'prose-slate' : 'prose-invert'}
            
            /* Force Markdown paragraphs to exactly match user text size */
            prose-p:text-sm prose-p:font-medium prose-p:leading-relaxed
            prose-p:mb-2 prose-p:mt-1 last:prose-p:mb-0
            
            /* Headings */
            prose-headings:font-bold prose-headings:text-slate-900
            prose-headings:mb-2 prose-headings:mt-3 first:prose-headings:mt-0
            prose-h1:text-base prose-h2:text-[15px] prose-h3:text-sm
            prose-strong:font-bold prose-strong:text-slate-900
            
            /* Lists - Force matching text size on list items too */
            prose-ul:list-disc prose-ul:pl-4 prose-ul:mb-2 prose-ul:mt-1
            prose-ol:list-decimal prose-ol:pl-4 prose-ol:mb-2 prose-ol:mt-1
            prose-li:my-0.5 prose-li:pl-0 prose-li:text-sm prose-li:font-medium
            
            /* Nested list spacing fix */
            prose-ul:prose-ul:mt-0 prose-ul:prose-ul:mb-0
            
            /* Links */
            prose-a:text-handy-dark-red prose-a:no-underline hover:prose-a:underline
          `}>
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {message.text}
            </ReactMarkdown>
          </div>
        )}

        {message.isBot && message.source && (
          <div className="mt-3 pt-3 border-t border-slate-100/80">
            <button 
              onClick={handleSourceClick} 
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-handy-dark-red bg-red-50 hover:bg-red-100 py-2 px-4 rounded-full transition-colors border border-red-100 w-fit"
            >
              <ExternalLink size={14} />
              View Source: {message.source}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ChatBubble;