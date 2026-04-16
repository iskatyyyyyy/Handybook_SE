import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import GlassCard from '../../components/ui/glassCard';
import TupButton from '../../components/ui/tupButton';
import ProcedureStepper from '../../components/stepper/procedureStepper';
import { FileText, MapPin, AlertCircle } from 'lucide-react';

const ShiftingGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Secure Shifting Form", description: "Obtain the official form from the Registrar's Office (Ground Floor, CAS Building)." }, // [cite: 1352]
    { title: "Department Evaluation", description: "Submit your transcript and form to the Department Head for initial interview." }, // [cite: 1170]
    { title: "Dean's Recommendation", description: "The Dean of the College evaluates the request based on current academic load." }, // [cite: 1151]
    { title: "Final Registrar Processing", description: "Final validation and updating of your official student record." } // [cite: 1351]
  ];

  return (
    <StudentLayout activePage="home">
      <div className="pb-10 animate-in fade-in duration-500">
        <header className="mb-8">
          <p className="text-[10px] font-black text-tup-green uppercase tracking-widest mb-1">Interactive Guide</p>
          <h1 className="text-3xl font-black text-tup-navy">Shifting Procedure</h1>
        </header>

        <GlassCard className="p-8 mb-6">
          <ProcedureStepper steps={steps} currentStep={activeStep} />
        </GlassCard>

        {/* Dynamic Action Button */}
        <div className="fixed bottom-28 left-6 right-6">
          <TupButton 
            className="w-full" 
            onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))}
          >
            Mark current step as completed
          </TupButton>
        </div>

        {/* Requirements Sidebar Logic */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <GlassCard className="p-5 bg-tup-soft-green/30 border-tup-green/10">
            <h4 className="flex items-center gap-2 text-xs font-black text-tup-green uppercase tracking-widest mb-3">
              <FileText size={16} /> Requirements
            </h4>
            <ul className="space-y-2 text-[11px] font-bold text-gray-500">
              <li>• Letter of Intent addressed to the Dean [cite: 1271]</li>
              <li>• Valid TUP Identification Card [cite: 1451]</li>
              <li>• Certified Copy of Grades (TCG)</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </StudentLayout>
  );
};

export default ShiftingGuide;