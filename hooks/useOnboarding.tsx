'use client';

import { OnboardingFormValues, OnboardingSchema } from '@/common/schema';
import { db, storage } from '@/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, updateDoc } from 'firebase/firestore';
import { signOut, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { set, useForm } from 'react-hook-form';
import useShowError from './useShowError';
import { deleteObject, ref } from 'firebase/storage';

const useOnboarding = () => {
  // check if user is logged in
  // if not, redirect to signup page
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = '/signup';
    }
  });

  // check if user is from signup page
  const searchParams = useSearchParams();
  if (searchParams.get('documentID') === null && searchParams.get('type') === null && searchParams.get('name') === null) window.location.href = '/';

  // collect search params
  const documentID = searchParams.get('documentID') as string;
  const type = searchParams.get('type') as string;
  const name = searchParams.get('name') as string;

  const { showError } = useShowError();
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const [isQuitting, setIsQuitting] = React.useState<boolean>(false);
  const STEPS = ['Photo', 'Information', 'Review'];
  const fieldToCheck: Record<number, (keyof OnboardingFormValues)[]> = {
    0: ['image'],
    1: ['industry', 'founded', 'employees', 'location']
  };

  // Form validation
  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(OnboardingSchema),
    defaultValues: {
      type: type,
      name: name,
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

  // Next Step
  const nextStep = () => {
    if (currentStep === STEPS.length - 1) return;

    const fields = fieldToCheck[currentStep];
    if (fields) {
      form.trigger(fields).then((isValid) => {
        if (!isValid) return;

        setCurrentStep((prev) => prev + 1);
      });
    }
  };

  // Previous Step
  const previousStep = () => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  };

  // Handle form submit
  const submit = form.handleSubmit(async (data: OnboardingFormValues) => {
    try {
      // Add data to database
      // Get document reference
      const docRef = doc(db, `${type}/${documentID}`);

      // Update document
      await updateDoc(docRef, data);
    } catch (error: any) {
      showError('Error', error.message);
    }
  });

  const handleQuit = async () => {
    setIsQuitting(true);
    if (form.getValues('image') !== '') {
      // Delete image from storage
      // Get image reference
      const imageRef = ref(storage, `logos/${data?.user?.email}`);

      // Delete image
      if (imageRef) {
        await deleteObject(imageRef).then(() => setIsQuitting(false));
        signOut();

        // Remove user from database
        window.location.href = '/signup';
      }
    }
  };

  return {
    form,
    currentStep,
    STEPS,
    isQuitting,
    submit,
    nextStep,
    previousStep,
    handleQuit
  };
};

export default useOnboarding;
