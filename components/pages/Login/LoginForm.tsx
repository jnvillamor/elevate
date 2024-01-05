'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useLogInForm from '@/hooks/useLogInForm';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
const LoginForm = () => {
  const { form, submit, isSubmitting, isValid, errors } = useLogInForm();

  return (
    <Form {...form}>
      <form onSubmit={submit} className='mt-16 mb-12 border-b-2 border-neutrals-916'>
        <FormItem className='mb-6'>
          <FormLabel className='text-xl mb-2'>Email Address</FormLabel>
          <FormControl>
            <Input
              id='email'
              type='email'
              {...form.register('email')}
              className={cn(
                'placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                errors.email && 'border-negative-600 placeholder:text-negative-600'
              )}
            />
          </FormControl>
          <FormMessage className='text-negative-600'>{errors.email?.message}</FormMessage>
        </FormItem>

        <FormItem className='mb-6'>
          <FormLabel className='text-xl mb-2'>Password</FormLabel>
          <FormControl>
            <Input
              id='password'
              type='password'
              {...form.register('password')}
              className={cn(
                'placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                errors.password && 'border-negative-600 placeholder:text-negative-600'
              )}
            />
          </FormControl>
          <FormMessage className='text-negative-600'>{errors.password?.message}</FormMessage>
        </FormItem>
        <Link href='/forgot-password'>
          <p className='text-primary-600'>Forgot Password?</p>
        </Link>
        <Button type='submit' className='px-6 py-3 my-12 bg-primary-600 text-neutrals-50 h-full w-full text-2xl' disabled={!isValid || isSubmitting}>
          {isSubmitting ? 'Logging In...' : 'Log In'}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
