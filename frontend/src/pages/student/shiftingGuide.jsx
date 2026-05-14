import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import GlassCard from '../../components/ui/glassCard';
import TupButton from '../../components/ui/tupButton';
import ProcedureStepper from '../../components/stepper/procedureStepper';
import { FileText, MapPin, AlertCircle, ChevronLeft, CheckCircle2 } from 'lucide-react';

const ShiftingGuide = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Secure Shifting Form", description: "Obtain the official form from the Registrar's Office (Ground Floor, CAS Building)." }, //
    { title: "Department Evaluation", description: "Submit your transcript and form to the Department Head for initial interview." }, //
    { title: "Dean's Recommendation", description: "The Dean of the College evaluates the request based on current academic load." }, //
    { title: "Final Registrar Processing", description: "Final validation and updating of your official student record." } //
  ];

  const isCompleted = activeStep === steps.length;

  return (
    <StudentLayout activePage="home">
      <div className="pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Header with Back Button */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-tup-green uppercase tracking-[0.2em] mb-1">Interactive Guide</p>
            <h1 className="text-3xl font-black text-tup-navy">Shifting Procedure</h1>
          </div>
          <button 
            onClick={() => navigate('/home')} 
            className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 hover:text-tup-green transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        </header>

        {/* The Stepper Visualization */}
        <GlassCard className="p-8 mb-6 overflow-hidden">
          {isCompleted ? (
            <div className="py-10 text-center animate-in zoom-in duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-tup-soft-green rounded-full mb-4">
                <CheckCircle2 size={40} className="text-tup-green" />
              </div>
              <h2 className="text-2xl font-black text-tup-navy">Process Complete!</h2>
              <p className="text-sm text-gray-500 font-medium mt-2">Your shifting request is now being processed by the Registrar.</p>
              <TupButton 
                variant="outline" 
                className="mt-8"
                onClick={() => setActiveStep(0)}
              >
                Reset Demo
              </TupButton>
            </div>
          ) : (
            <ProcedureStepper steps={steps} currentStep={activeStep} />
          )}
        </GlassCard>

        {/* Dynamic Action Button */}
        {!isCompleted && (
          <div className="fixed bottom-28 left-6 right-6 z-40">
            <TupButton 
              className="w-full shadow-xl shadow-tup-green/20" 
              onClick={() => setActiveStep(prev => prev + 1)}
            >
              Mark current step as completed
            </TupButton>
          </div>
        )}

        {/* Contextual Information Grid */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          {/* Requirements Section */}
          <GlassCard className="p-5 bg-tup-soft-green/30 border-tup-green/10">
            <h4 className="flex items-center gap-2 text-xs font-black text-tup-green uppercase tracking-widest mb-3">
              <FileText size={16} /> Requirements
            </h4>
            <ul className="space-y-2 text-[11px] font-bold text-gray-700">
              <li className="flex items-center gap-2">• Letter of Intent addressed to the Dean</li>
              <li className="flex items-center gap-2">• Valid TUP Identification Card</li>
              <li className="flex items-center gap-2">• Certified Copy of Grades (TCG)</li>
            </ul>
          </GlassCard>

          {/* Location Hint */}
          <GlassCard className="p-5 flex items-start gap-4">
            <div className="p-3 bg-gray-50 rounded-2xl text-gray-400">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Current Step Location</h4>
              <p className="text-sm font-bold text-tup-navy">
                {isCompleted ? "N/A" : steps[activeStep]?.description.split('(')[1]?.replace(')', '') || "Main Building"}
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </StudentLayout>
  );
};

export default ShiftingGuide;