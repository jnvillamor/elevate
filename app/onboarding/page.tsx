'use client';

import InformationForm from '@/components/pages/Onboarding/InformationForm';
import PhotoForm from '@/components/pages/Onboarding/PhotoForm';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { z } from 'zod';
import { TbLetterX } from 'react-icons/tb';
import Stepper from '@/components/pages/Onboarding/Stepper';
import Review from '@/components/pages/Onboarding/Review';
import { useSearchParams } from 'next/navigation';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useSession } from 'next-auth/react';

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
  employees: z.string().min(1, {
    message: 'Number of employees is required'
  }),
  location: z.string().min(1, {
    message: 'Location is required'
  }),
  coords: z
    .object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180)
    })
    .refine((data) => data && data.lat && data.lng, {
      message: 'Please select a location'
    })
});

const fieldToCheck: Record<number, (keyof z.infer<typeof OnboardingSchema>)[]> = {
  0: ['image'],
  1: ['industry', 'founded', 'employees', 'location']
};

const Onboarding = () => {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = '/signup';
    }
  });
  
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const STEPS = ['Photo', 'Information', 'Review'];
  const form = useForm<z.infer<typeof OnboardingSchema>>({
    resolver: zodResolver(OnboardingSchema),
    defaultValues: {
      type: searchParams.get('type') as string,
      name: searchParams.get('name') as string,
      image: '',
      industry: '',
      founded: '',
      employees: '',
      location: '',
      coords: {
        lat: 0,
        lng: 0
      }
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

  const handleSubmit = form.handleSubmit( async (data) => {
    try {
      const docRef = await addDoc(collection(db, data.type), data);
      console.log("Document written with ID: ", docRef.id);
    }
    catch (error) {
      console.log(error);
    }
    
  })
  
  const prevStep = () => {
    if (currentStep === 0) return;

    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className='min-h-screen bg-neutrals-950 flex justify-center items-center'>
      <FormProvider {...form}>
        <form className='w-full py-24'>
          <h1 className='font-product_sans text-4xl text-center mb-9'>Create a Profile</h1>

          <div className='max-w-3xl m-auto'>
            {/* Stepper */}
            <Stepper currentStep={currentStep} STEPS={STEPS} />

            {/* Steps */}
            {currentStep === 0 && <PhotoForm />}
            {currentStep === 1 && <InformationForm />}
          </div>
          {currentStep === 2 && <Review />}

          {/* Buttons */}
          <div className='flex justify-center gap-6 m'>
            {currentStep === 0 && (
              <Button type='button' className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
                <TbLetterX size={24} className='mr-2' />
                Quit
              </Button>
            )}
            {currentStep === 1 && (
              <Button
                type='button'
                onClick={prevStep}
                className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
                <LiaAngleLeftSolid size={24} className='mr-2' />
                Back
              </Button>
            )}
            {currentStep !== 2 && (
              <Button
                type='button'
                onClick={nextStep}
                className='pl-8 pr-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-primary-600 flex justify-center'>
                Next
                <LiaAngleRightSolid size={24} className='ml-2' />
              </Button>
            )}
            {currentStep === 2 && (
              <div className='bg-[#171717bf] w-full fixed top-1/2 -translate-y-1/2 py-12 z-10 flex justify-center items-center gap-6'>
                <Button
                type='button'
                onClick={prevStep}
                className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
                <LiaAngleLeftSolid size={24} className='mr-2' />
                Back
              </Button>
                <Button
                  type='submit'
                  onClick={handleSubmit}
                  className='pl-8 pr-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-primary-600 flex justify-center'>
                  Done
                  <LiaAngleRightSolid size={24} className='ml-2' />
                </Button>
              </div>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Onboarding;
