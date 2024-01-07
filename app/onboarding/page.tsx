'use client';

import PhotoForm from '@/components/pages/Onboarding/PhotoForm';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { z } from 'zod';

const OnboardingSchema = z
  .object({
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
  })

const Onboarding = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const STEPS = ['Photo', 'Information', 'Review'];
  const form = useForm<z.infer<typeof OnboardingSchema>>({
    defaultValues: {
      type: '',
      name: '',
      image: '',
      industry: '',
      founded: '',
      employees: 0,
      location: ''
    }
  });

  const nextStep = () => {
    if (currentStep === STEPS.length - 1) return;

    if(currentStep === 0) {
      form.trigger("image").then((isValid) => {
        console.log(isValid);
      });
    }
  };

  const prevStep = () => {
    if (currentStep === 0) return;

    setCurrentStep((prev) => prev - 1);
  }

  return (
    <div className='h-screen bg-neutrals-950 flex justify-center items-center'>
      <FormProvider {...form}>
        <form className='max-w-md w-full' >
          <h1 className='font-product_sans text-4xl text-center mb-9'>Create a Profile</h1>

          {/* Stepper */}
          <div className='flex justify-between relative'>
            {STEPS.map((step, i) => (
              <div key={i} className='relative flex-grow flex flex-col gap-3 justify-center items-center step__item'>
                <div
                  className={cn(
                    'rounded-full h-14 aspect-square text-2xl flex justify-center items-center z-10',
                    currentStep === i ? 'bg-neutrals-50 text-neutrals-950' : 'bg-neutrals-916 text-neutrals-50'
                  )}>
                  {i + 1}
                </div>
                <p className='text-xl'>{step}</p>
              </div>
            ))}
          </div>

          {currentStep === 0 && <PhotoForm />}

          {/* Buttons */}
          <div className='flex justify-center gap-6 m'>
            <Button type='button' onClick={prevStep} className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
              <LiaAngleLeftSolid size={24} className='mr-2' />
              Back
            </Button>
            <Button type='button' onClick={nextStep}  className='pl-8 pr-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-primary-600 flex justify-center'>
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
