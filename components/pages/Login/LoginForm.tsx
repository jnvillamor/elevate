'use client';
import AlertMessage from '@/components/AlertMessage/AlertMessage';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

const LoginForm = () => {
  const [error, setError] = React.useState<string | null>(null);

  const onClose = () => {
    setError(null);
  }
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;
    const result = await signIn('credentials', { email, password, redirect: false, callbackUrl: '/' });

    if (result?.error) {
      setError(result.error);
    } else if (result?.url) {
      window.location.href = result.url;
    }
  };

  return (
    <>
      {error && <AlertMessage message={error} onClose={onClose} />}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-16 mb-6 border-b-2 border-neutrals-916'>
          <FormField
            control={form.control}
            name='email'
            render={({ field, formState }) => (
              <FormItem className='mb-6'>
                <FormLabel className='text-xl mb-2'>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='Email Address'
                    {...field}
                    className={cn(
                      'bg-neutrals-916 px-6 py-3 border-neutrals-600 placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0',
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
                    type='password'
                    placeholder='Password'
                    {...field}
                    className={cn(
                      'bg-neutrals-916 px-6 py-3 border-neutrals-600 placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0',
                      formState.errors.password && 'border-negative-600 placeholder:text-negative-600'
                    )}
                  />
                </FormControl>
                {formState.errors.password && <FormMessage className='text-negative-600'>{formState.errors.password.message}</FormMessage>}
              </FormItem>
            )}
          />
          <div>
            <Link href='' className='text-primary-600'>
              Forgot Password?
            </Link>
          </div>
          <FormField
            name='submit'
            render={({ formState }) => (
              <Button
                type='submit'
                className='px-6 py-3 h-full w-full my-12 bg-primary-600 text-neutral-50 text-2xl'
                disabled={!formState.isValid || formState.isSubmitting}>
                {formState.isSubmitting ? 'Loggin In...' : 'Log In'}
              </Button>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
