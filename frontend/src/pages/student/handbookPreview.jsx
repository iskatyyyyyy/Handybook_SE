import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import AdminLayout from '../../layouts/adminLayout'; 
import { 
  Download, 
  Sparkles,
  List
} from 'lucide-react';

const HandbookPreview = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  // Determine which layout to use based on the URL path
  const isAdminRoute = location.pathname.includes('/admin');
  const Layout = isAdminRoute ? AdminLayout : StudentLayout;

  // REPLACED: Updated with actual entries and page numbers from the TUP Handbook
  const tableOfContents = [
    { title: "TUP History & General Info", page: 1 },
    { title: "Academic Programs", page: 5 },
    { title: "Admission & Transfer Policies", page: 10 },
    { title: "Adding & Dropping of Subjects", page: 14 },
    { title: "Grading System", page: 16 },
    { title: "Leave of Absence & Residency", page: 18 },
    { title: "Registrar & Clinic Services", page: 21 },
    { title: "IT Center & Library", page: 22 },
    { title: "Scholarships & Grants", page: 24 },
    { title: "School Uniform & Student ID", page: 25 },
    { title: "Major Offenses & Sanctions", page: 38 },
    { title: "Minor Offenses & Sanctions", page: 45 },
  ];

  // Placeholder Google Drive Preview Link
  const drivePreviewLink = "https://drive.google.com/file/d/1xDY2-kVcGStG6QVktrHPMs3jv8HPA2p_/preview";

  // The magic Google Drive direct download link
  const handleDownload = () => {
    const fileId = "1xDY2-kVcGStG6QVktrHPMs3jv8HPA2p_";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Open the download link in a hidden way
    window.open(downloadUrl, '_blank');
  };

  return (
    <Layout activePage="preview-handbook">
      <div className="h-full flex flex-col pb-4 sm:pb-5 animate-in fade-in duration-500 max-w-7xl mx-auto w-full">
        
        {/* 1. HEADER CARD */}
        <header className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3 sm:mb-4 shrink-0">
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-0.5">2013 Revised Student Handbook</h1>
            <p className="text-[12px] font-medium text-slate-500">Official Technological University of the Philippines Guide</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={handleDownload}
              className="px-4 py-2 bg-white border border-handy-dark-red text-handy-dark-red text-[12px] font-bold rounded-lg hover:bg-red-50 transition-colors shadow-sm flex items-center gap-2"
            >
              <Download size={14} />
              Download Handbook
            </button>
            <button 
              onClick={() => navigate(isAdminRoute ? '/admin/chat' : '/chat')}
              className="px-4 py-2 bg-handy-dark-red text-white text-[12px] font-bold rounded-lg hover:bg-red-900 transition-colors shadow-sm flex items-center gap-2"
            >
              <Sparkles size={14} />
              Ask Handybook AI
            </button>
          </div>
        </header>

        {/* 2. MAIN SPLIT LAYOUT */}
        <div className="flex-1 flex flex-col lg:flex-row gap-3 sm:gap-4 overflow-hidden">
          
          {/* Left: PDF Iframe Viewer */}
          <main className="flex-1 bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-sm relative border border-slate-200">
            <iframe 
              src={drivePreviewLink} 
              className="w-full h-full border-0"
              title="TUP Student Handbook PDF"
              allow="autoplay"
            ></iframe>
          </main>

          {/* Right Sidebar: Table of Contents */}
          <aside className="w-full lg:w-72 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col shrink-0 overflow-hidden">
            
            <div className="p-5 border-b border-slate-50 flex items-center gap-3 shrink-0">
              <div className="bg-red-50 text-handy-dark-red p-2 rounded-lg">
                <List size={18} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-[14px] tracking-tight">Table of Contents</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
              <div className="space-y-0.5">
                {tableOfContents.map((item, index) => (
                  <button 
                    key={index}
                    className="w-full flex items-center gap-3 py-2 px-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group text-left outline-none"
                  >
                    <div className="w-[26px] h-[26px] rounded-full bg-[#FEEBEB] text-handy-dark-red flex items-center justify-center text-[10px] font-bold shrink-0 group-hover:bg-handy-dark-red group-hover:text-white transition-colors">
                      {item.page}
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700 group-hover:text-handy-dark-red leading-snug transition-colors">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
          </aside>

        </div>
      </div>
    </Layout>
  );
};

export default HandbookPreview;