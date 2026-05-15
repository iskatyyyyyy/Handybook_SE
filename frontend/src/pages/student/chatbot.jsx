import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import AdminLayout from '../../layouts/adminLayout'; 
import ChatBubble from '../../components/chat/chatBubble'; 
import { useChatUI } from '../../hooks/useChatUI'; 
import { Sparkles, Send, ArrowLeft, BookOpen } from 'lucide-react';

const Chatbot = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  
  // 1. STATEFUL REDIRECTION PARAMETERS
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get('topicId');
  const contextName = searchParams.get('context');
  
  const isAdminRoute = location.pathname.includes('/admin');
  const Layout = isAdminRoute ? AdminLayout : StudentLayout;

  const { messages, isTyping, sendMessage } = useChatUI();
  
  const [inputText, setInputText] = useState("");
  const chatEndRef = useRef(null);

  const hasAutoPrompted = useRef(false);

  // 2. SMART UX: Pre-fill input based on the Handbook context
  useEffect(() => {
    // We check for length === 1 because Hance initializes with a greeting
    if (contextName && messages.length === 1 && !hasAutoPrompted.current) {
      const autoMessage = `Can you explain more about the policies on ${contextName}?`;
      
      // Fire the message immediately
      sendMessage(autoMessage);
      
      // Mark as prompted so it doesn't fire again on re-renders
      hasAutoPrompted.current = true;
    }
  }, [contextName, messages.length, sendMessage]);

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

  // 3. RETURN NAVIGATION LOGIC
  const handleReturnToHandbook = () => {
    if (topicId) {
      // Return to handbook and automatically open the specific drawer
      navigate(`/guide?topicId=${topicId}`);
    } else {
      // Fallback if they accessed the chat directly
      navigate('/guide');
    }
  };

  const isConversationStarted = messages.length > 1;

  return (
    <Layout activePage="chat">
      <div className="flex flex-col h-[calc(100vh-130px)] max-w-5xl mx-auto w-full animate-in fade-in duration-500">
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col overflow-hidden relative">
          
          {/* CONTEXTUAL HEADER: Only shows if the user came from a handbook topic */}
          {topicId && (
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between shrink-0">
              <button 
                onClick={handleReturnToHandbook}
                className="flex items-center gap-2 text-slate-500 hover:text-handy-dark-red transition-colors font-bold text-[12px] uppercase tracking-widest"
              >
                <ArrowLeft size={16} />
                Back to Handbook
              </button>
              
              {contextName && (
                <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <BookOpen size={14} className="text-handy-dark-red" />
                  <span className="text-[11px] font-bold text-slate-600 truncate max-w-[250px]">
                    Topic: {contextName}
                  </span>
                </div>
              )}
            </div>
          )}



          {/* Scrollable Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar flex flex-col">
            
          {/* HIDE INTRODUCTION ONCE CHAT STARTS */}
              {!isConversationStarted && (
                <div className="flex flex-col items-center justify-center text-center mt-4 mb-12 shrink-0 animate-out fade-out duration-500">
                  <div className="w-16 h-16 bg-handy-dark-red rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
                    <Sparkles size={28} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">Handybook AI Assistant</h2>
                  <p className="text-[13px] font-medium text-slate-500">Ask me about grades, attendance policies, or shifting procedures.</p>
                </div>
              )}

            {/* Conversation History */}
            <div className="space-y-8 flex-1 flex flex-col pb-4">
                {messages.map((msg, index) => (
                  <ChatBubble key={index} message={msg} />
                ))}

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