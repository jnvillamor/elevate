'use client';
import AlertMessage from '@/components/AlertMessage/AlertMessage';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { auth } from '@/firebase';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(4, { message: 'Password must be at least 8 characters long' }),
  agreeTerms: z.boolean().refine((val) => val === true, { message: 'You must agree to the terms and conditions' })
});

const SignupForm = ({ type }: { type: 'Startup' | 'Enabler' }) => {
  const [error, setError] = React.useState<string | null>(null);

  const onClose = () => {
    setError(null);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      agreeTerms: false
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        if (userCredential.user) {
          const result = await signIn('credentials', { email, password, callbackUrl: '/' });

          if (result?.error) setError(result.error);
          else if (result?.url) window.location.href = result.url;
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      {error && <AlertMessage message={error} onClose={onClose} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-16 mb-12 border-b-2 border-neutrals-916'>
          <FormField
            control={form.control}
            name='name'
            render={({ field, formState }) => (
              <FormItem className='mb-6'>
                <FormLabel className='text-xl mb-2'>{type === 'Startup' ? 'Startup' : 'Organization'} Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Startup Name'
                    {...field}
                    className={cn(
                      'placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                      formState.errors.name && 'border-negative-600 placeholder:text-negative-600'
                    )}
                  />
                </FormControl>
                {formState.errors.name && <FormMessage className='text-negative-600'>{formState.errors.name.message}</FormMessage>}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field, formState }) => (
              <FormItem className='mb-6'>
                <FormLabel className='text-xl mb-2'>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Email Address'
                    {...field}
                    className={cn(
                      'placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                      formState.errors.email && 'border-negative-600 placeholder:text-negative-600'
                    )}
                  />
                </FormControl>
                {formState.errors.email && <FormMessage className='text-negative-600'>{formState.errors.email.message}</FormMessage>}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field, formState }) => (
              <FormItem className='mb-6'>
                <FormLabel className='text-xl mb-2'>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Password'
                    type='password'
                    {...field}
                    className={cn(
                      'placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                      formState.errors.password && 'border-negative-600 placeholder:text-negative-600'
                    )}
                  />
                </FormControl>
                {formState.errors.password && <FormMessage className='text-negative-600'>{formState.errors.password.message}</FormMessage>}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='agreeTerms'
            render={({ field, formState }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className='h-5 w-5 border-2 border-neutrals-600 bg-neutrals-916 data-[state=checked]:bg-primary-600 data-[state=checked]:text-neutrals-50 data-[state=checked]:border-none '
                  />
                </FormControl>
                <FormLabel className='text-xl mb-2 ml-2'>
                  I agree with{' '}
                  <span>
                    <Link href='/terms' className='text-primary-600'>
                      Terms and Conditions
                    </Link>
                  </span>
                </FormLabel>
                {formState.errors.name && <FormMessage className='text-negative-600'>{formState.errors.name.message}</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            name='submit'
            render={({ formState }) => (
              <Button
                type='submit'
                className='px-6 py-3 my-12 bg-primary-600 text-neutrals-50 h-full w-full text-2xl'
                disabled={!formState.isValid || formState.isSubmitting}>
                {formState.isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </Button>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
