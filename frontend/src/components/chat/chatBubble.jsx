import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; //
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const ChatBubble = ({ message }) => {
  const navigate = useNavigate();

  const handleSourceClick = () => {
    // Navigates to the guide page and appends the section ID as a URL hash
    if (message.sectionId) {
      navigate(`/guide#${message.sectionId}`);
    }
  };

return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[85%] p-4 rounded-[1.5rem] ${
        message.isBot ? 'bg-white border text-slate-700' : 'bg-handy-dark-red text-white'
      }`}>
        {/* Use ReactMarkdown for structured answers */}
        <div className="text-[14px]
          leading-7
          prose
          prose-sm
          max-w-none

          prose-p:my-4
          prose-p:leading-7

          prose-headings:mt-8
          prose-headings:mb-4
          prose-headings:font-semibold
          prose-headings:text-slate-900

          prose-h2:text-lg
          prose-h3:text-base

          prose-ul:my-4
          prose-ul:pl-6

          prose-li:my-1

          prose-hr:my-8
          prose-hr:border-slate-200

          prose-strong:font-semibold
          prose-strong:text-slate-900

          prose-code:text-red-700
          prose-code:bg-slate-100
          prose-code:px-1
          prose-code:py-0.5
          prose-code:rounded

          prose-pre:bg-slate-900
          prose-pre:text-slate-100
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {message.text}
          </ReactMarkdown>
        </div>

        {/* This button will now show up because it's in the component! */}
        {message.isBot && message.source && (
          <button onClick={handleSourceClick} className="...">
             VIEW SOURCE: {message.source}
          </button>
        )}
      </div>
    </div>
  );
};
export default ChatBubble;