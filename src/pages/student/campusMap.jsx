import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import GlassCard from '../../components/ui/glassCard';
import { Map as MapIcon, Navigation, Search, Info, Building2 } from 'lucide-react';

const CampusMap = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Building data based on handbook locations
  const buildings = [
    { id: "A", name: "Administration Building", offices: ["Accounting Office", "Cashier's Office"] }, // 
    { id: "B", name: "College of Arts & Science", offices: ["University Registrar"] }, // 
    { id: "C", name: "University Library", details: "3 Floors of educational repositories" }, // [cite: 1378, 1381]
    { id: "D", name: "IRTC Building", details: "Conference Hall and research facilities" }, // [cite: 1683]
    { id: "E", name: "TUP Medical & Dental Clinic", details: "Routine health services" }, // [cite: 1362, 1363]
    { id: "F", name: "IT Center", details: "Network and web development units" }, // [cite: 1371, 1377]
  ];

  const filteredBuildings = buildings.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (b.offices && b.offices.some(o => o.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <StudentLayout activePage="home">
      <div className="pb-10 animate-in fade-in duration-500">
        
        {/* 1. HEADER SECTION */}
        <header className="mb-6">
          <p className="text-[10px] font-black text-tup-green uppercase tracking-[0.2em] mb-1">Campus Life</p>
          <h1 className="text-3xl font-black text-tup-navy">Campus Map</h1>
          <p className="text-sm text-gray-500 font-medium">Navigate TUP Manila grounds and facilities[cite: 542].</p>
        </header>

        {/* 2. INTERACTIVE MAP VIEWPORT */}
        <div className="relative w-full aspect-video bg-tup-soft-green rounded-[2.5rem] border-4 border-white shadow-2xl overflow-hidden mb-8 group">
          {/* Placeholder for the 3D visual representation mentioned in Fig 10 [cite: 541, 543] */}
          <div className="absolute inset-0 flex items-center justify-center bg-tup-navy/5">
            <MapIcon size={48} className="text-tup-green/20" />
            <p className="absolute bottom-6 text-[10px] font-bold text-tup-navy/40 uppercase tracking-widest">
              3D Campus Viewport 
            </p>
          </div>
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <MapControl icon={<Navigation size={18} />} />
            <MapControl icon={<Info size={18} />} />
          </div>
        </div>

        {/* 3. SEARCH & LEGEND SECTION */}
        <section>
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search buildings or offices (e.g. Registrar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-tup-green/10 transition-all text-sm font-medium"
            />
          </div>

          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xs font-black text-tup-navy uppercase tracking-widest">Building Legend [cite: 544]</h3>
            <span className="text-[10px] font-bold text-gray-400">{filteredBuildings.length} Results</span>
          </div>

          <div className="space-y-3">
            {filteredBuildings.map((building) => (
              <GlassCard key={building.id} className="p-5 flex items-start gap-4 hover:border-tup-green/20 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-tup-soft-green flex items-center justify-center text-tup-green font-black text-lg shadow-inner group-hover:bg-tup-green group-hover:text-white transition-all">
                  {building.id}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-tup-navy leading-tight">{building.name}</h4>
                  {building.offices ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {building.offices.map(office => (
                        <span key={office} className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded-md text-[9px] font-bold text-gray-500 uppercase">
                          {office}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[11px] text-gray-400 font-medium mt-1">{building.details}</p>
                  )}
                </div>
                <Building2 size={16} className="text-gray-200 mt-1" />
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </StudentLayout>
  );
};

const MapControl = ({ icon }) => (
  <button className="p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white text-tup-navy hover:text-tup-green active:scale-90 transition-all">
    {icon}
  </button>
);

export default CampusMap;