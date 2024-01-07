'use client';

import InformationForm from '@/components/pages/Onboarding/InformationForm';
import PhotoForm from '@/components/pages/Onboarding/PhotoForm';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import Stepper from '@/components/pages/Onboarding/Stepper';
import Review from '@/components/pages/Onboarding/Review';
import useOnboarding from '@/hooks/useOnboarding';
import Buttons from '@/components/pages/Onboarding/Buttons';

const Onboarding = () => {
  const { form, currentStep, STEPS, isQuitting, submit, nextStep, previousStep, handleQuit } = useOnboarding();

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
            <Buttons
              currentStep={currentStep}
              isQuitting={isQuitting}
              previousStep={previousStep}
              nextStep={nextStep}
              submit={submit}
              handleQuit={handleQuit}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Onboarding;
