import React, { useState, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PerspectiveCamera, Html } from '@react-three/drei';
import StudentLayout from '../../layouts/studentLayout';

// Component for the individual floating markers
const BuildingMarker = ({ position, label, buildingName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Html position={position} center>
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out overflow-hidden shadow-lg border border-white/20
          ${isExpanded ? "bg-white rounded-2xl pr-4 max-w-[300px]" : "bg-red-600 rounded-full w-10 h-10 max-w-[40px]"}
        `}
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-sm">
          {label}
        </div>
        <div className={`whitespace-nowrap transition-all duration-300 ${isExpanded ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
          <span className="text-slate-900 font-bold text-sm tracking-tight">
            {buildingName}
          </span>
        </div>
      </div>
    </Html>
  );
};

const CampusModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const CampusMap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPaused, setIsPaused] = useState(true);

  // Populated Building Data A-Z
  const buildings = useMemo(() => [
    { id: "A", name: "College of Science", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "B", name: "College of Liberal Arts", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "C", name: "College of Industrial Education", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "D", name: "College of Architecture and Fine Arts", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "E", name: "College of Industrial Technology", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "F", name: "CIT Old Building", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "G", name: "Integrated Research and Training Center", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "H", name: "Graphic Arts Institute of the Philippines", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "I", name: "Administration Building", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "J", name: "Engineering and Science Education Program", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "K", name: "Center for Academic Programs", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "L", name: "Ripalda Hall", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "M", name: "NSTC/ROTC and Centennial Stage", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "N", name: "Open Field Court", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "O", name: "Covered Court", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "P", name: "Library", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "Q", name: "Powerplant Engineering Technology", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "R", name: "Supply and Procurement Building", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "S", name: "Chapel", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "T", name: "Study Shed", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "U", name: "Auxiliary and Maintenance", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "V", name: "College of Engineering", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "W", name: "TUP Comfort Room", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "X", name: "Commercial Stall", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "Y", name: "TUP Cooperative", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "Z", name: "UITC", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ], []);

  const filteredBuildings = buildings.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StudentLayout activePage="map">
      <div className="max-w-6xl mx-auto pb-12">
        <header className="mb-8 px-4 sm:px-0">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Campus Map</h1>
          <p className="text-slate-500 text-lg max-w-4xl leading-relaxed">
            Navigate the 3D model below. Click the red markers to reveal building names.
          </p>
        </header>

        {/* 3D VIEWPORT CONTAINER */}
        <div className="relative h-[600px] w-full bg-slate-950 rounded-3xl overflow-hidden mb-12 shadow-2xl border border-slate-800 mx-auto max-w-[95vw] sm:max-w-full">
          
          <div className="absolute top-6 right-6 z-30">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-xl border ${
                isPaused 
                  ? "bg-emerald-600 text-white border-emerald-400 hover:bg-emerald-500" 
                  : "bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-xl"
              }`}
            >
              <span>{isPaused ? "▶ RESUME MAP" : "II PAUSE INTERACTION"}</span>
            </button>
          </div>

          <Suspense fallback={
            <div className="flex flex-col items-center justify-center h-full text-white font-mono bg-slate-900 text-xs animate-pulse">
              INITIALIZING 3D ENVIRONMENT...
            </div>
          }>
            <Canvas shadows gl={{ antialias: true }}>
              <PerspectiveCamera makeDefault position={[18, 18, 18]} fov={45} />
              <Stage intensity={0.5} environment="city" adjustCamera={false}>
                <CampusModel modelPath="/models/placeholder_map.glb" />
                
                {/* Placeholder markers pinned to the current map geometry */}
                <BuildingMarker position={[2, 1, 2]} label="A" buildingName="College of Science" />
                <BuildingMarker position={[-3, 1, 1]} label="B" buildingName="College of Liberal Arts" />
                <BuildingMarker position={[0, 1, -2]} label="P" buildingName="Library" />
              </Stage>

              <OrbitControls 
                makeDefault
                enabled={!isPaused}
                enableDamping={false}
                minDistance={8}
                maxDistance={35}
                maxPolarAngle={Math.PI / 2.2}
              />
            </Canvas>
          </Suspense>

          <div className="absolute bottom-6 left-6 z-20 pointer-events-none flex items-center space-x-3">
            <div className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-500 animate-pulse" : "bg-emerald-500 animate-ping"}`} />
            <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${
              isPaused ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-black/60 text-white/80 border-white/10"
            }`}>
              {isPaused ? "Static Mode" : "Interactive Mode"}
            </span>
          </div>
        </div>

        {/* LEGEND SECTION */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12 mx-4 sm:mx-0">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-handy-dark-red/10 flex items-center justify-center text-handy-dark-red font-black">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-handy-dark-red tracking-tight">BUILDING LEGEND</h2>
            </div>
            <input 
              type="text" 
              placeholder="Search buildings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-80 pl-4 py-3 border border-slate-200 rounded-2xl text-sm outline-none shadow-sm focus:ring-2 focus:ring-handy-dark-red/20 transition-all"
            />
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
             {filteredBuildings.map((building) => (
                <div key={building.id} className="p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-black mb-3">{building.id}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{building.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{building.details}</p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </StudentLayout>
  );
};

export default CampusMap;