import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
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
        <Dialog>
          <DialogTrigger>
            <Button type='button' className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
              <TbLetterX size={24} className='mr-2' />
              Quit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Cancel Onboarding?</DialogHeader>
            <div className='py-6'>
              <p>Quiting will result to removal of account? Do you wish to proceed?</p>
            </div>
            <DialogFooter className='flex justify-between'>
              <Button
                type='button'
                variant='destructive'
                onClick={handleQuit}
                className='pr-8 pl-6 py-3 rounded-sm h-full text-neutral-50 bg-negative-600 flex justify-center'>
                Exit Onboarding
              </Button>
              <DialogClose asChild>
                <Button
                  type='button'
                  variant='destructive'
                  className='pr-8 pl-6 py-3 rounded-sm h-full text-neutral-50 bg-primary-600 flex justify-center'>
                  Continue Onboarding
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
            disabled={formState.isSubmitting}
            className='pr-8 pl-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-neutrals-916 flex justify-center'>
            <LiaAngleLeftSolid size={24} className='mr-2' />
            Back
          </Button>

          <Button
            type='submit'
            onClick={submit}
            disabled={formState.isSubmitting}
            className='pl-8 pr-6 py-3 rounded-sm text-xl h-full text-neutrals-50 bg-primary-600 flex justify-center'>
            {formState.isSubmitting ? 'Submitting...' : 'Done'}
            <LiaAngleRightSolid size={24} className='ml-2' />
          </Button>
        </div>
      )}
    </>
  );
};

export default Buttons;
