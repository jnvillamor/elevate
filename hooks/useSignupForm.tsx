import { auth } from '@/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import useShowError from './useShowError';

const formSchema = z
  .object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    agreeTerms: z.boolean().refine((val) => val === true, { message: 'You must agree to the terms and conditions' }),
    confirmPassword: z.string().min(8, {
      message: 'Password must be at least 8 characters long'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

const useSignupForm = () => {
  const { showError } = useShowError();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    },
    mode: 'onBlur'
  });

  const submit = form.handleSubmit(async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        if (userCredential.user) {
          const result = await signIn('credentials', { email, password, callbackUrl: '/onboarding' });

          if (result?.error) {
            showError('Error', result.error);
          } else if (result?.url) window.location.href = result.url;
        }
      });
    } catch (error: any) {
      showError('Error', error.customData._tokenResponse.error.message);
    }
  });

  return {
    form,
    submit,
    isSubmitting: form.formState.isSubmitting,
    isValid: form.formState.isValid,
    errors: form.formState.errors
  };
};

export default useSignupForm;
