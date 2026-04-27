import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import { 
  Download, 
  Printer, 
  Share2, 
  MessageSquare, 
  BookOpen, 
  ChevronRight, 
  Info,
  X,
  Send,
  ArrowLeft
} from 'lucide-react';

const HandbookPreview = () => {
  // State to toggle the AI side-panel
  const navigate = useNavigate();
  const [isAIOpen, setIsAIOpen] = useState(false);

  // Mock Data for the Table of Contents
  const tableOfContents = [
    { title: "University Profile", page: 4 },
    { title: "Academic Information", page: 12 },
    { title: "Grading System", page: 25 },
    { title: "Registration Procedures", page: 34 },
    { title: "Scholarships & Grants", page: 42 },
    { title: "Rules on Conduct", page: 56 },
    { title: "Disciplinary Actions", page: 68 },
    { title: "Campus Facilities", page: 80 },
  ];

  // Placeholder Google Drive Preview Link (Replace with actual TUP link)
  const drivePreviewLink = "https://drive.google.com/file/d/1xDY2-kVcGStG6QVktrHPMs3jv8HPA2p_/preview";

  return (
    <StudentLayout activePage="home">
      {/* Kept your original vertical spacing classes */}
      <div className="h-full flex flex-col pb-4 animate-in fade-in duration-500">
        
        {/* 1. ACTION BAR & VERSION INFO */}
        <header className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-4 shrink-0">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 text-gray-400 hover:text-handy-dark-red hover:bg-red-50 rounded-xl transition-all"
              title="Go Back"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="bg-handy-dark-red/10 p-2.5 rounded-xl text-handy-dark-red">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 leading-tight">2013 Revised Student Handbook</h1>
              <div className="flex items-center space-x-2 mt-1">
                <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">Official</span>
                <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                  <Info size={12} /> Last Updated: April 2026
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-bold rounded-xl transition-colors border border-gray-200">
              <Share2 size={16} />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-bold rounded-xl transition-colors border border-gray-200">
              <Printer size={16} />
              <span>Print</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-handy-dark-red hover:bg-red-800 text-white text-sm font-bold rounded-xl shadow-sm transition-colors">
              <Download size={16} />
              <span>Download PDF</span>
            </button>
            
            {/* AI Toggle Button */}
            {!isAIOpen && (
              <button 
                onClick={() => setIsAIOpen(true)}
                className="ml-2 flex items-center space-x-2 px-4 py-2 bg-[#FEEBEB] hover:bg-[#fcdede] text-handy-dark-red text-sm font-bold rounded-xl transition-colors border border-red-100"
              >
                <MessageSquare size={16} />
                <span>Ask AI</span>
              </button>
            )}
          </div>
        </header>

        {/* 2. MAIN SPLIT LAYOUT */}
        <div className="flex-1 flex gap-4 overflow-hidden">
          
          {/* Left Sidebar: Quick Jump TOC */}
          <aside className="w-64 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col shrink-0 overflow-hidden">
            <div className="p-4 border-b border-gray-50 bg-gray-50/50">
              <h3 className="font-extrabold text-gray-900 text-sm uppercase tracking-wider">Quick Jump</h3>
              <p className="text-xs text-gray-500 mt-1">Table of Contents</p>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
              {tableOfContents.map((item, index) => (
                <button 
                  key={index}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 text-left group transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-handy-dark-red transition-colors">
                    {item.title}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-black text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
                      PG {item.page}
                    </span>
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-handy-dark-red opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Center: PDF Iframe Viewer */}
          <main className="flex-1 bg-gray-200 rounded-2xl overflow-hidden shadow-inner relative border border-gray-200">
            <iframe 
              src={drivePreviewLink} 
              className="w-full h-full border-0"
              title="TUP Student Handbook PDF"
              allow="autoplay"
            ></iframe>
          </main>

          {/* Right Sidebar: HandyBook AI (Collapsible) */}
          {isAIOpen && (
            <aside className="w-80 bg-white rounded-2xl border border-gray-100 shadow-lg flex flex-col shrink-0 overflow-hidden animate-in slide-in-from-right-8 duration-300">
              {/* FIXED AI Header: White background, dark text, visible close button */}
              <div className="p-4 border-b border-gray-100 bg-white flex justify-between items-center">
                <div className="flex items-center space-x-2 text-handy-dark-red">
                  <MessageSquare size={18} />
                  <h3 className="font-bold text-sm text-gray-900">HandyBook AI</h3>
                </div>
                
                <button 
                  onClick={() => setIsAIOpen(false)}
                  className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors bg-gray-50 hover:bg-red-50 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-gray-100"
                >
                  <X size={14} />
                  <span>Close</span>
                </button>
              </div>
              
              {/* AI Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 flex flex-col gap-4">
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 self-start max-w-[85%]">
                  Hi Andrea! I'm reading the handbook alongside you. Need help summarizing a policy or finding specific rules?
                </div>
              </div>

              {/* AI Input Area */}
              <div className="p-4 border-t border-gray-50 bg-white">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask about the handbook..." 
                    className="w-full bg-gray-50 border border-gray-200 focus:border-handy-dark-red focus:ring-1 focus:ring-handy-dark-red rounded-xl py-3 pl-4 pr-12 text-sm transition-all"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-handy-dark-red text-white rounded-lg hover:bg-red-800 transition-colors">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </aside>
          )}

        </div>
      </div>
    </StudentLayout>
  );
};

export default HandbookPreview;