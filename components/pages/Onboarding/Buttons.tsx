import { Button } from '@/components/ui/button';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { TbLetterX } from 'react-icons/tb';

type ButtonsProps = {
  currentStep: number;
  isQuitting: boolean;
  previousStep: () => void;
  nextStep: () => void;
  submit: () => void;
  handleQuit: () => void;
};

const Buttons = ({ currentStep, isQuitting, previousStep, nextStep, submit, handleQuit }: ButtonsProps) => {
  const { formState } = useFormContext();

  return (
    <>
      {currentStep === 0 && (
        <Button
          onClick={handleQuit}
          type='button'
          className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
          <TbLetterX size={24} className='mr-2' />
          Quit
        </Button>
      )}

      {currentStep === 1 && (
        <Button
          type='button'
          onClick={previousStep}
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
            onClick={previousStep}
            className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
            <LiaAngleLeftSolid size={24} className='mr-2' />
            Back
          </Button>

          <Button
            type='submit'
            onClick={submit}
            className='pl-8 pr-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-primary-600 flex justify-center'>
            Done
            <LiaAngleRightSolid size={24} className='ml-2' />
          </Button>
        </div>
      )}
    </>
  );
};

export default Buttons;
