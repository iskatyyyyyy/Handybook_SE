import React from 'react';
import { Check, Circle } from 'lucide-react';

const ProcedureStepper = ({ steps, currentStep }) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={index} className="flex gap-4 group">
            {/* The Vertical Line & Node */}
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                isCompleted ? 'bg-tup-green border-tup-green text-white' : 
                isActive ? 'border-tup-green bg-white text-tup-green' : 
                'border-gray-200 bg-white text-gray-300'
              }`}>
                {isCompleted ? <Check size={16} /> : <span className="text-xs font-bold">{index + 1}</span>}
              </div>
              {index !== steps.length - 1 && (
                <div className={`w-0.5 h-12 my-1 transition-colors ${
                  isCompleted ? 'bg-tup-green' : 'bg-gray-100'
                }`} />
              )}
            </div>

            {/* Step Details */}
            <div className="pt-1 flex-1">
              <h4 className={`text-sm font-bold leading-none ${isActive ? 'text-tup-navy' : 'text-gray-400'}`}>
                {step.title}
              </h4>
              <p className={`text-[11px] mt-1.5 font-medium leading-relaxed ${isActive ? 'text-gray-500' : 'text-gray-300'}`}>
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProcedureStepper;