import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import { useChatUI } from '../../hooks/useChatUI'; 

const Chatbot = () => {
  const navigate = useNavigate();
  // We keep their exact hook for all the logic!
  const { messages, isTyping, sendMessage } = useChatUI();
  
  // Local state for our new custom input field
  const [inputText, setInputText] = useState("");

  console.log("My messages look like this: ", messages);

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
    <StudentLayout activePage="chat">
      {/* Chat Container: Fills the height of the desktop view */}
      <div className="flex flex-col h-[calc(100vh-2rem)] max-w-5xl mx-auto w-full pt-4 relative">
        
        {/* 1. Header */}
        <div className="flex items-center justify-between mb-6 px-4 shrink-0">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Handybook AI Assistant</h2>
            <p className="text-gray-500 font-medium mt-1">Trained on the 2013-2024 Student Handbook</p>
          </div>
          <button 
            onClick={() => navigate(-1)} 
            className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg font-bold text-sm flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Back
          </button>
        </div>

        {/* 2. Dynamic Message Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-8 scroll-smooth pb-40">
          
          {messages.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center border-4 border-white shadow-inner">
                <svg className="w-10 h-10 text-handy-dark-red" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path></svg>
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900">How can I help you, Andrea?</h2>
                <p className="text-sm text-gray-500 font-medium mt-2">Ask me about grades, attendance policies, or shifting procedures.</p>
              </div>
            </div>
          ) : (
            /* Conversation History Mapping */
            messages.map((msg, index) => {
              // Assuming their hook uses 'sender' or 'role' to differentiate AI vs User. 
              // Adjust "msg.sender === 'ai'" if their property is named differently (like msg.isAi or msg.role)
              const isAi = msg.isBot;

              return isAi ? (
                /* AI Bubble */
                <div key={index} className="flex gap-4 max-w-3xl animate-in fade-in slide-in-from-bottom-2">
                  <div className="w-10 h-10 rounded-xl bg-handy-dark-red flex items-center justify-center flex-shrink-0 shadow-sm text-white font-bold text-[10px]">
                    AI
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white border border-gray-100 shadow-sm px-6 py-4 rounded-2xl rounded-tl-none">
                      <p className="text-gray-800 leading-relaxed">{msg.text || msg.content}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pl-2">HandyBook AI</span>
                  </div>
                </div>
              ) : (
                /* User Bubble */
                <div key={index} className="flex gap-4 max-w-3xl ml-auto flex-row-reverse animate-in fade-in slide-in-from-bottom-2">
                  <div className="w-10 h-10 rounded-full border-2 border-orange-200 overflow-hidden flex-shrink-0 bg-white">
                    <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ug3laCN5NwE-oe_wVIRnJAomvNOG8LGvVYNnJ7MuW7X4lh1ixIR_YuDeemvJk-ak-WHESnOH4muPotSXkcmztHamqFr7-ZnN9EFocUXIKC52MwZoGcvC--cS3tiwVRBCEmfM6FD6DWEeZy0eHqYGVOljvD8MAEdfuQXfYqhFEHHgWy7DU2XqFL5Y6uoEHdWlBazyzG3bTC65jiTbjIZ57CBBxPywt3Cu1V9E8-AqFZBnMk4P00thKgBaY4bRmwUcEUrHUN8glvuhQ" />
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="bg-[#B96A6A] text-white px-6 py-4 rounded-2xl rounded-tr-none shadow-md">
                      <p className="leading-relaxed">{msg.text || msg.content}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pr-2">Andrea</span>
                  </div>
                </div>
              );
            })
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-4 max-w-3xl animate-in fade-in">
              <div className="w-10 h-10 rounded-xl bg-handy-dark-red/50 flex items-center justify-center flex-shrink-0 shadow-sm text-white font-bold text-[10px] animate-pulse">
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

        {/* 3. Footer Input (Floating Pill Design) */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`relative flex items-center bg-white border rounded-full shadow-lg p-2 transition-all ${isTyping ? 'border-gray-200 opacity-70' : 'border-gray-300'}`}>
              <button className="p-3 text-gray-400 hover:text-handy-dark-red transition-colors">
                <svg className="w-6 h-6 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
              </button>
              
              <input 
                className="flex-1 bg-transparent border-0 focus:ring-0 text-gray-800 placeholder:text-gray-400 px-4 outline-none" 
                placeholder={isTyping ? "Hance is typing..." : "Ask anything about the student handbook..."}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
              />
              
              <button 
                onClick={handleSend}
                disabled={isTyping || !inputText.trim()}
                className="w-12 h-12 rounded-full bg-handy-dark-red text-white flex items-center justify-center hover:bg-red-900 shadow-md active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
              >
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-3">
              Handybook AI can make mistakes. Check important information against the physical handbook.
            </p>
          </div>
        </div>

      </div>
    </StudentLayout>
  );
};

export default Chatbot;