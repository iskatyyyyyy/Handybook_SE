import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; //

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
        <div className="text-[13px] font-medium leading-relaxed prose prose-sm max-w-none">
          <ReactMarkdown>{message.text}</ReactMarkdown>
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