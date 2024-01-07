'use client';

import InformationForm from '@/components/pages/Onboarding/InformationForm';
import PhotoForm from '@/components/pages/Onboarding/PhotoForm';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { z } from 'zod';

const OnboardingSchema = z.object({
  type: z.string().min(1, {
    message: 'Type is required'
  }),
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  image: z.string().min(1, {
    message: 'Please submit a photo'
  }),
  industry: z.string().min(1, {
    message: 'Industry is required'
  }),
  founded: z.string().min(1, {
    message: 'Year of foundation is required'
  }),
  employees: z.number().min(1, {
    message: 'Number of employees is required'
  }),
  location: z.string().min(1, {
    message: 'Location is required'
  })
});

const fieldToCheck: Record<number, (keyof z.infer<typeof OnboardingSchema>)[]> = {
  0: ['image'],
  1: ["industry", "founded", "employees", "location"]
}

const Onboarding = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const STEPS = ['Photo', 'Information', 'Review'];
  const form = useForm<z.infer<typeof OnboardingSchema>>({
    resolver: zodResolver(OnboardingSchema),
    defaultValues: {
      type: '',
      name: '',
      image: '',
      industry: '',
      founded: '',
      employees: 0,
      location: ''
    },
    mode: 'onBlur'
  });

  const nextStep = () => {
    if (currentStep === STEPS.length - 1) return;

    const fields = fieldToCheck[currentStep];
    if (fields) {
      form.trigger(fields).then((isValid) => {
        if (isValid) {
          setCurrentStep((prev) => prev + 1);
        }
      });
    }
  };

  const prevStep = () => {
    if (currentStep === 0) return;

    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className='min-h-screen bg-neutrals-950 flex justify-center items-center'>
      <FormProvider {...form}>
        <form className='max-w-3xl w-full py-24'>
          <h1 className='font-product_sans text-4xl text-center mb-9'>Create a Profile</h1>

          {/* Stepper */}
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

          {currentStep === 0 && <PhotoForm />}
          {currentStep === 1 && <InformationForm />}

          {/* Buttons */}
          <div className='flex justify-center gap-6 m'>
            <Button
              type='button'
              onClick={prevStep}
              className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
              <LiaAngleLeftSolid size={24} className='mr-2' />
              Back
            </Button>
            <Button
              type='button'
              onClick={nextStep}
              className='pl-8 pr-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-primary-600 flex justify-center'>
              Next
              <LiaAngleRightSolid size={24} className='ml-2' />
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Onboarding;
