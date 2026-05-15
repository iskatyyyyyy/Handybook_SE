import React, { useState, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three'; // Required for tone mapping constants
import StudentLayout from '../../layouts/studentLayout';

// Component for the individual floating markers
const BuildingMarker = ({ position, label, buildingName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Html position={position} center>
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out overflow-hidden shadow-lg border border-white/20
          ${isExpanded ? "bg-white rounded-xl pr-3 max-w-[250px]" : "bg-red-600 rounded-full w-7 h-7 max-w-[28px]"}
        `}
      >
        {/* The Circular Button - Reduced from w-10 to w-7 */}
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-[10px]">
          {label}
        </div>

        {/* The Expanded Content - Smaller font and margin */}
        <div className={`whitespace-nowrap transition-all duration-300 ${isExpanded ? "opacity-100 ml-2 w-auto" : "opacity-0 w-0"}`}>
          <span className="text-slate-900 font-bold text-[11px] tracking-tight">
            {buildingName}
          </span>
        </div>
      </div>
    </Html>
  );
};

const CampusModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <primitive 
      object={scene} 
      onClick={(e) => {
        // Prevents the click from hitting objects behind the model
        e.stopPropagation(); 
        
        // Logs the exact 3D point in a format you can copy/paste
        const { x, y, z } = e.point;
        console.log(`Marker Position for Legend: [${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}]`);
      }}
    />
  );
};

const CampusMap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPaused, setIsPaused] = useState(true);

  const buildings = useMemo(() => [
    { id: "A", name: "Arts & Science Building", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "B", name: "University Library", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "C", name: "College of Industrial Education", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "D", name: "College of Architecture & Fine Arts", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "E", name: "Chapel", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "F", name: "College of Industrial Technology", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "G", name: "Covered Court", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "H", name: "TUP Grounds", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "I", name: "Centennial Stage", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "J", name: "Ripalda Hall", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "K", name: "CAP Building", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "L", name: "College of Engineering Tower", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "M", name: "Administration Bldg.", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "N", name: "IRTC Building", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "O", name: "Covered Court", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "P", name: "PPET Building", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "Q", name: "Tomas Pinpin Hall", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "R", name: "Tayuman Canteen", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "S", name: "Old Technical Arts Bldg", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: "T", name: "Motorpool", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  ], []);

  const filteredBuildings = buildings.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StudentLayout activePage="map">
      <div className="max-w-6xl mx-auto pb-12">
        <header className="mb-8 px-4 sm:px-0">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">Campus Map</h1>
          <p className="text-slate-500 text-lg max-w-4xl leading-relaxed">
            Navigate the high-fidelity 3D model below. Click the red markers to reveal building names.
          </p>
        </header>

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
              ENHANCING VISUALS...
            </div>
          }>
            {/* ToneMapping set to ACESFilmic for better color depth */}
            <Canvas 
              shadows 
              gl={{ 
                antialias: true, 
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.5,
                outputColorSpace: THREE.SRGBColorSpace 
              }}
            >
              <PerspectiveCamera makeDefault position={[2, 16, 32]} fov={10} />
              
              {/* Higher Ambient intensity for better base color saturation */}
              <ambientLight intensity={0.8} />
              
              {/* Directional light to act as a "sun" for sharper shadows and highlights */}
              <directionalLight 
                position={[10, 20, 10]} 
                intensity={1.2} 
                castShadow 
                shadow-mapSize={[1024, 1024]}
              />

              <Stage intensity={0.6} environment="city" adjustCamera={false} shadows="contact">
                <CampusModel modelPath="/models/junobebefuckyousitedev.glb" />
                
                {/* Sample Markers */}
                <BuildingMarker position={[-0.95, .25, -0.58]} label="A" buildingName="Arts & Science Building" />
                <BuildingMarker position={[-0.32, .25, -1.18]} label="B" buildingName="University Library" />
                <BuildingMarker position={[-0.2, .25, -1.8]} label="C" buildingName="College of Industrial Education" />
                <BuildingMarker position={[0.68, .25, -1.8]} label="D" buildingName="College of Architecture & Fine Arts" />
                <BuildingMarker position={[0.15, .15, -1.38]} label="E" buildingName="Chapel" />
                <BuildingMarker position={[1.12, .25, -0.67]} label="F" buildingName="College of Industrial Technology" />
                <BuildingMarker position={[0.22,.25, 0]} label="G" buildingName="Covered Court" />
                <BuildingMarker position={[-0.28, 0.1, 0.2]} label="H" buildingName="TUP Grounds" />
                <BuildingMarker position={[-0.67,.15, 0.52]} label="I" buildingName="Centennial Stage" />
                <BuildingMarker position={[-1.08,.15, 0.96]} label="J" buildingName="Ripalda Hall" />
                <BuildingMarker position={[-0.76,.15, 1.27]} label="K" buildingName="CAP Building" />
                <BuildingMarker position={[-0.5,.25, 1.75]} label="L" buildingName="College of Engineering Tower" />
                <BuildingMarker position={[0.1,.25, 1.26]} label="M" buildingName="Administration Bldg." />
                <BuildingMarker position={[0.9,.25, 1.4]} label="N" buildingName="IRTC Building" />
                <BuildingMarker position={[1.4,.2, 1.6]} label="O" buildingName="PPET Building" />
                <BuildingMarker position={[2.08,.2, 1.47]} label="P" buildingName="Tomas Pinpin Hall" />
                <BuildingMarker position={[2.05,.2, 0.74]} label="Q" buildingName="Tayuman Canteen" />
                <BuildingMarker position={[1.57,.2, 0.84]} label="R" buildingName="Old Technical Arts Bldg" />
                <BuildingMarker position={[1.34,.25, 0.37]} label="S" buildingName="Motorpool" />
              </Stage>

              <OrbitControls 
                makeDefault
                enabled={!isPaused}
                enableDamping={false}
                minDistance={4}
                maxDistance={32}
                maxPolarAngle={Math.PI / 2.2}
              />
            </Canvas>
          </Suspense>

          <div className="absolute bottom-6 left-6 z-20 pointer-events-none flex items-center space-x-3">
            <div className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-500 animate-pulse" : "bg-emerald-500 animate-ping"}`} />
            <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${
              isPaused ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-black/60 text-white/80 border-white/10"
            }`}>
              {isPaused ? "Static Environment" : "Interactive Render"}
            </span>
          </div>
        </div>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12 mx-4 sm:mx-0">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-handy-dark-red/10 flex items-center justify-center text-handy-dark-red font-black">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-handy-dark-red tracking-tight uppercase">BUILDING LEGEND</h2>
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
                <div key={building.id} className="group p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
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