import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import AdminLayout from '../../layouts/adminLayout'; // Imported AdminLayout
import ChatBubble from '../../components/chat/chatBubble'; // Import your component
import { useChatUI } from '../../hooks/useChatUI'; 
import { Sparkles, Send } from 'lucide-react';

const Chatbot = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to read current URL
  
  // Determine which layout to use based on the URL path
  const isAdminRoute = location.pathname.includes('/admin');
  const Layout = isAdminRoute ? AdminLayout : StudentLayout;

  // Keep the exact hook for logic
  const { messages, isTyping, sendMessage } = useChatUI();
  
  const [inputText, setInputText] = useState("");
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive or typing status changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (inputText.trim() && !isTyping) {
      sendMessage(inputText);
      setInputText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    // Replaced <StudentLayout> with the dynamic <Layout> component
    <Layout activePage="chat">
      {/* Container carefully calculated to fill the remaining screen height inside the layout */}
      <div className="flex flex-col h-[calc(100vh-130px)] max-w-5xl mx-auto w-full animate-in fade-in duration-500">
        
        {/* Main White Chat Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col overflow-hidden relative">
          
          {/* Scrollable Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar flex flex-col">
            
            {/* Top Intro Section (Static at the top of the chat history) */}
            <div className="flex flex-col items-center justify-center text-center mt-4 mb-12 shrink-0">
              <div className="w-16 h-16 bg-handy-dark-red rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">Handybook AI Assistant</h2>
              <p className="text-[13px] font-medium text-slate-500">Ask me about grades, attendance policies, or shifting procedures.</p>
            </div>

            {/* Conversation History */}
            <div className="space-y-6 flex-1 flex flex-col pb-4">
              {messages.map((msg, index) => (
                /* This replaces all the manual div/p logic with your intelligent component */
                <ChatBubble key={index} message={msg} />
              ))}

              {/* Keep your Typing Indicator logic below the map */}
              {isTyping && (
                <div className="flex gap-3 max-w-[85%] sm:max-w-[75%] animate-in fade-in slide-in-from-bottom-2">
                  <div className="w-8 h-8 rounded-full bg-handy-dark-red flex items-center justify-center shrink-0 mt-1 shadow-sm text-white">
                    <Sparkles size={14} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-extrabold text-slate-900 ml-1">Hance</span>
                    <div className="bg-[#F4F6F8] px-5 py-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5 w-fit">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Footer Input Area */}
          <div className="p-4 sm:p-6 bg-white border-t border-slate-50 shrink-0">
            <div className="flex items-center gap-3">
              <input 
                className="flex-1 bg-[#F4F6F8] border border-slate-100 rounded-lg px-4 py-3.5 text-[13px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-handy-dark-red/20 focus:border-handy-dark-red transition-all disabled:opacity-50" 
                placeholder={isTyping ? "Hance is typing..." : "Type your message here..."}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
                autoFocus
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !inputText.trim()}
                className="w-12 h-12 shrink-0 rounded-lg bg-handy-dark-red text-white flex items-center justify-center hover:bg-red-900 shadow-sm active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
              >
                <Send size={18} className="ml-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;