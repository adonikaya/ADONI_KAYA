'use client';

import React from 'react';
import { Check } from 'lucide-react';

export interface StepItem {
  number: number;
  label: string;
  shortLabel: string;
}

export const WIZARD_STEPS: StepItem[] = [
  { number: 1, label: 'ટેમ્પલેટ પસંદ કરો', shortLabel: 'ટેમ્પલેટ' },
  { number: 2, label: 'વિગતો ભરો', shortLabel: 'વિગતો' },
  { number: 3, label: 'સંદેશ પસંદ કરો', shortLabel: 'સંદેશ' },
  { number: 4, label: 'પરિવારજનોનાં નામ', shortLabel: 'પરિવાર' },
  { number: 5, label: 'પૂર્વદર્શન અને એડિટર', shortLabel: 'પૂર્વદર્શન' },
  { number: 6, label: 'ડાઉનલોડ', shortLabel: 'ડાઉનલોડ' },
];

interface StepProgressProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export const StepProgress: React.FC<StepProgressProps> = ({ currentStep, onStepClick }) => {
  return (
    <div className="w-full bg-white border-b border-brand-sand py-4 px-2 sm:px-6 shadow-xs">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between relative">
          {/* Background Connecting Line */}
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-gray-200 -z-0" />
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 h-0.5 bg-brand-saffron transition-all duration-300 -z-0"
            style={{
              width: `${((currentStep - 1) / (WIZARD_STEPS.length - 1)) * 95}%`,
            }}
          />

          {WIZARD_STEPS.map((step) => {
            const isCompleted = step.number < currentStep;
            const isCurrent = step.number === currentStep;

            return (
              <button
                key={step.number}
                type="button"
                disabled={!isCompleted && !isCurrent}
                onClick={() => isCompleted && onStepClick?.(step.number)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none ${
                  isCompleted ? 'cursor-pointer' : isCurrent ? 'cursor-default' : 'cursor-not-allowed opacity-60'
                }`}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm ${
                    isCompleted
                      ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                      : isCurrent
                      ? 'bg-brand-saffron text-white ring-4 ring-brand-saffronLight shadow-md scale-110'
                      : 'bg-white text-gray-400 border-2 border-gray-300'
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" /> : step.number}
                </div>
                <span
                  className={`mt-1.5 text-[10px] sm:text-xs font-medium font-gujarati whitespace-nowrap ${
                    isCurrent
                      ? 'text-brand-saffron font-bold'
                      : isCompleted
                      ? 'text-gray-800'
                      : 'text-gray-400'
                  }`}
                >
                  <span className="hidden md:inline">{step.label}</span>
                  <span className="md:hidden">{step.shortLabel}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
