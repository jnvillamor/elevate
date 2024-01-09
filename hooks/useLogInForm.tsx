import { z } from 'zod';
import useShowError from './useShowError';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .min(3, {
      message: 'Password must be at least 8 characters long'
    })
    .max(32, {
      message: 'Password must be less than 32 characters long'
    })
});

const useLogInForm = () => {
  const { showError } = useShowError();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const submit = form.handleSubmit(async ({ email, password }) => {
    try {
      const result = await signIn('credentials', { email, password, redirect: false, callbackUrl: '/ecosystem-mapping' });

      if (result?.error) {
        showError('Error', result.error);
      } else if (result?.url) {
        window.location.href = result.url;
      }
    } catch (error: any) {
      showError('Error', error.message);
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

export default useLogInForm;
