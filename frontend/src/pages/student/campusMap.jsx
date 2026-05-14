import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';

const CampusMap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // Removed activeBuilding state and the associated useEffect

  // Mock Data
  const buildings = [
    { id: "A", name: "Administration Building", offices: ["University Library", "University Registrar"] },
    { id: "B", name: "College of Liberal Arts & Science", offices: ["Office of Student Affairs", "University Clinic", "TUP Museum"] },
    { id: "C", name: "TUP Centennial Grounds", details: "Main student plaza featuring an event stage and covered multi-purpose sports courts." }, 
    { id: "D", name: "IRTC Building", details: "Conference Hall and research facilities" }, 
    { id: "E", name: "TUP Medical & Dental Clinic", details: "Routine health services" }, 
    { id: "F", name: "IT Center", details: "Network and web development units" }, 
  ];

  // Original filtering logic (Kept intact)
  const filteredBuildings = buildings.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (b.offices && b.offices.some(o => o.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <StudentLayout activePage="map">
      <div className="max-w-6xl mx-auto pb-12">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Campus Map</h1>
          <p className="text-slate-500 text-lg max-w-4xl leading-relaxed">
            Navigate TUP Manila grounds and facilities. Explore the interactive campus map to effortlessly locate buildings, amenities, and green spaces.
          </p>
        </header>

        {/* BEGIN: Map Visualization (Figma Layout) */}
        <div className="relative bg-slate-50 rounded-3xl overflow-hidden mb-12 shadow-inner border border-slate-100">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 z-0">
             <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">3D Campus Viewport</p>
          </div>
          <img 
            alt="Campus Map Illustration" 
            className="w-full h-auto object-contain block mx-auto py-10 px-4 relative z-10" 
            src="https://kommodo.ai/i/LeNkQcwb07LUmpveVEDF" 
          />
        </div>
        {/* END: Map Visualization */}

        {/* BEGIN: Legend Section */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          
          {/* Legend Header & Search Bar */}
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h2 className="text-xl font-bold text-handy-dark-red tracking-wide uppercase">Building Legend</h2>
            </div>
            
            <div className="relative w-full sm:w-72">
              <input 
                type="text" 
                placeholder="Search buildings or offices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-handy-dark-red focus:border-transparent outline-none transition-all shadow-sm"
              />
            </div>
          </div>
          
          {/* Legend Items Container */}
          <div className="p-8 max-h-[500px] overflow-y-auto legend-scroll">
            
            {filteredBuildings.length === 0 ? (
               <p className="text-center text-slate-400 font-medium py-10">No buildings or offices found matching "{searchQuery}"</p>
            ) : (
              <div className="space-y-5">
                {filteredBuildings.map((building) => (
                  // Removed click handlers and opacity changes
                  <div key={building.id} className="flex gap-6 items-start group">
                    
                    {/* Consistent Building Letter Badge */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-16 h-12 rounded-2xl flex items-center justify-center font-black text-lg bg-red-50 border border-red-100 text-handy-dark-red shadow-sm group-hover:bg-red-100 transition-colors">
                        {building.id}
                      </div>
                    </div>
                    
                    {/* Consistent Details Card */}
                    <div className="flex-grow p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{building.name}</h3>
                      
                      {building.offices ? (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {building.offices.map(office => (
                            <span key={office} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 uppercase tracking-wider">
                              {office}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-500 text-sm leading-relaxed mt-1">{building.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* END: Legend Section */}
      </div>
    </StudentLayout>
  );
};

export default CampusMap;