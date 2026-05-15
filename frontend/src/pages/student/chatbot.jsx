import React, { useState, useRef, useEffect } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import AdminLayout from '../../layouts/adminLayout'; 
import { supabase } from '../../lib/supabase'; 
import ReactMarkdown from 'react-markdown';
import SubmitInquiryModal from '../../components/inquiry/submitInquiryModal';
import { Send, Sparkles, User, AlertCircle, BookOpen, UserCircle } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am Hance, the official TUP Manila AI Assistant. How can I help you navigate the handbook today?",
      source: null
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  
  const [userRole, setUserRole] = useState("user"); 
  
  // NEW: State to hold our active database session ID
  const [currentSessionId, setCurrentSessionId] = useState(null);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch role AND create a database Chat Session on mount
  useEffect(() => {
    const initializeChat = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // 1. Fetch Role
        const { data: profileData } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
          
        if (profileData) setUserRole(profileData.role);

        // 2. Create a new Chat Session in the database
        const { data: sessionData, error: sessionError } = await supabase
          .from('chat_sessions')
          .insert({ user_id: session.user.id })
          .select('id')
          .single();

        if (sessionData && !sessionError) {
          setCurrentSessionId(sessionData.id); // Save the ID to state!
        }
      }
    };

    initializeChat();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    const userMessage = { id: Date.now(), sender: "user", text: userText };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // 1. Save the User's message to Supabase
      if (currentSessionId) {
        await supabase.from('chat_messages').insert({
          session_id: currentSessionId,
          sender: 'user',
          message: userText
        });
      }

      // 2. Ask the AI
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      if (!response.ok) throw new Error("Failed to connect to Hance");

      const data = await response.json();
      const aiMessage = { id: Date.now() + 1, sender: "ai", text: data.reply, source: data.source };
      setMessages((prev) => [...prev, aiMessage]);

      // 3. Save the AI's response to Supabase
      if (currentSessionId) {
        await supabase.from('chat_messages').insert({
          session_id: currentSessionId,
          sender: 'ai',
          message: data.reply,
          source: data.source || null
        });
      }

    } catch (error) {
      console.error(error);
      const errorMessage = {
        id: Date.now() + 1, sender: "ai", isError: true,
        text: "I am having trouble connecting to my database right now. Please try again later."
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const ActiveLayout = userRole === 'admin' ? AdminLayout : StudentLayout;

  return (
    <>
      <ActiveLayout activePage="chat">
        <div className="max-w-4xl mx-auto h-full flex flex-col pb-4 animate-in fade-in duration-500">
          
          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm shrink-0 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 text-handy-dark-red p-3 rounded-xl shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">Ask Hance</h1>
                <p className="text-[13px] font-medium text-slate-500">
                  Your intelligent guide to TUP Manila policies, facilities, and student services.
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsInquiryModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 hover:border-handy-dark-red hover:text-handy-dark-red px-5 py-2.5 rounded-xl font-bold text-[12px] transition-colors shadow-sm shrink-0 outline-none"
            >
              <UserCircle size={16} />
              Talk to a Human
            </button>
          </section>

          <div className="flex-1 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden flex flex-col relative">
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 bg-[#F8FAFC]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-handy-dark-red text-white flex items-center justify-center shrink-0 mr-3 mt-1 shadow-sm">
                      <Sparkles size={14} />
                    </div>
                  )}

                  <div className="flex flex-col max-w-[85%] sm:max-w-[75%]">
                    <div 
                      className={`p-4 sm:p-5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                        msg.sender === 'user' 
                          ? 'bg-[#E2E8F0] text-slate-800 rounded-tr-sm font-medium' 
                          : msg.isError 
                            ? 'bg-red-50 border border-red-100 text-red-700 rounded-tl-sm'
                            : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm'
                      }`}
                    >
                      {msg.sender === 'ai' && !msg.isError ? (
                        <div className="prose prose-slate prose-sm max-w-none prose-headings:text-handy-dark-red prose-a:text-blue-600">
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                      ) : (
                        msg.text
                      )}
                    </div>

                    {msg.source && (
                      <div className="mt-2 flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">
                        <BookOpen size={12} /> Source: {msg.source}
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 ml-3 mt-1">
                      <User size={14} />
                    </div>
                  )}
                  
                </div>
              ))}

              {isLoading && (
                <div className="flex w-full justify-start">
                  <div className="w-8 h-8 rounded-full bg-handy-dark-red text-white flex items-center justify-center shrink-0 mr-3 mt-1 shadow-sm">
                    <Sparkles size={14} />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-5 shadow-sm flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 sm:p-5 bg-white border-t border-slate-100 shrink-0">
              <form onSubmit={handleSendMessage} className="relative flex items-center">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question about university policies..." 
                  disabled={isLoading}
                  className="w-full bg-[#F4F6F8] border border-slate-200 rounded-xl py-3.5 pl-5 pr-14 text-[13px] font-medium text-slate-800 focus:outline-none focus:border-handy-dark-red focus:ring-1 focus:ring-handy-dark-red transition-all placeholder:text-slate-400 placeholder:font-normal disabled:opacity-60"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 p-2 bg-handy-dark-red text-white rounded-lg hover:bg-red-900 transition-colors disabled:opacity-50 disabled:hover:bg-handy-dark-red outline-none shadow-sm"
                >
                  <Send size={16} />
                </button>
              </form>
              <div className="mt-3 flex justify-center items-center gap-1.5 text-[11px] font-medium text-slate-400">
                <AlertCircle size={12} /> Hance can make mistakes. Consider verifying important information.
              </div>
            </div>

          </div>
        </div>
      </ActiveLayout>

      <SubmitInquiryModal 
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        source="Handybook AI" 
        chatSessionId={currentSessionId} /* <-- FINALLY PASSING THE ID HERE! */
      />
    </>
  );
};

export default Chatbot;