import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import Markdown from 'react-markdown'

/**
 * HOLLOW CHATBOT COMPONENT
 * This component is now strictly for presentation. 
 * All AI logic and RAG retrieval have been moved to the backend.
 */
const Chatbot = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  
  // UI State - Isolated from previous local simulation logic
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");

  // Automatically scroll to the latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim() || isTyping) return;

    const currentQuery = inputText;

    const userMessage = {
      text: inputText,
      isBot: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    
    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentQuery }),
      });

      if (!response.ok) {
        throw new Error('Hance is currently out of the office.');
      }

      const data = await response.json();

      // Add Hance's response to the chat[cite: 1, 9]
      const botMessage = {
        text: data.reply,
        isBot: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        // Error handling to keep the UI from getting stuck[cite: 1, 9]
        setMessages(prev => [...prev, {
          text: "I'm having trouble connecting to my brain. Please check if the backend server is running.",
          isBot: true,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      } finally {
        setIsTyping(false);
      }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <StudentLayout activePage="chat">
      <div className="flex flex-col h-[calc(100vh-2rem)] max-w-5xl mx-auto w-full pt-4 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 px-4 shrink-0">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Handybook Assistant</h2>
            <p className="text-gray-500 font-medium mt-1">Official TUP Student Handbook Guide</p>
          </div>
          <button 
            onClick={() => navigate(-1)} 
            className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg font-bold text-sm flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
        </div>

        {/* Dynamic Message Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-8 scroll-smooth pb-40"
        >
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-4 border-white shadow-inner">
                <span className="text-2xl opacity-20">💬</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900">How can I help you today?</h2>
                <p className="text-sm text-gray-500 font-medium mt-2">Ask about grades, attendance, or university policies.</p>
              </div>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex gap-4 max-w-3xl animate-in fade-in slide-in-from-bottom-2 ${msg.isBot ? '' : 'ml-auto flex-row-reverse'}`}
              >
                {/* Avatar Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm font-bold text-[10px] ${msg.isBot ? 'bg-tup-green text-white' : 'bg-gray-100 border'}`}>
                  {msg.isBot ? 'AI' : 'ME'}
                </div>
                
                {/* Text Bubble */}
                <div className={`space-y-2 ${msg.isBot ? '' : 'text-right'}`}>
                  <div className={`px-6 py-4 rounded-2xl shadow-sm ${msg.isBot ? 'bg-white border border-gray-100 rounded-tl-none' : 'bg-tup-green text-white rounded-tr-none'}`}>
                    {/* Using a div with whitespace-pre-wrap to handle manual line breaks 
                        and Markdown to handle bolding and bullet points */}
                    <div className="whitespace-pre-wrap leading-relaxed">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    {msg.isBot ? 'Handybook AI' : 'Student'}
                  </span>
                </div>
              </div>
            ))
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-4 max-w-3xl animate-in fade-in">
              <div className="w-10 h-10 rounded-xl bg-tup-green/50 flex items-center justify-center flex-shrink-0 shadow-sm text-white font-bold text-[10px] animate-pulse">
                AI
              </div>
              <div className="bg-white border border-gray-100 shadow-sm px-6 py-4 rounded-2xl rounded-tl-none flex items-center gap-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Input */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center bg-white border rounded-full shadow-lg p-2 transition-all border-gray-300">
              <input 
                className="flex-1 bg-transparent border-0 focus:ring-0 text-gray-800 placeholder:text-gray-400 px-6 outline-none" 
                placeholder="Ask about the student handbook..."
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !inputText.trim()}
                className="w-12 h-12 rounded-full bg-tup-green text-white flex items-center justify-center hover:opacity-90 shadow-md active:scale-95 transition-all disabled:opacity-50"
              >
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </StudentLayout>
  );
};

export default Chatbot;