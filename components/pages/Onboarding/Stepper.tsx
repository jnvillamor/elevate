import { cn } from '@/lib/utils';
import React from 'react';

type StepperProps = { 
  currentStep: number;
  STEPS: string[];
}

const Stepper = ({ currentStep, STEPS}: StepperProps) => {
  return (
    <>
      <div className='flex justify-between'>
        {STEPS.map((step, i) => (
          <div key={i} className='relative flex-grow flex flex-col gap-3 justify-center items-center step__item'>
            <div
              className={cn(
                'rounded-full h-14 aspect-square text-2xl flex justify-center items-center z-10',
                currentStep === i ? 'bg-neutrals-50 text-neutrals-950' : 'bg-neutrals-916 text-neutrals-50'
              )}>
              {i + 1}
            </div>
            <p className={cn('text-xl', currentStep === i ? 'text-neutrals-50' : 'text-neutrals-600')}>{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
