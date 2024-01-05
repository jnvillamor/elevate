'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useSignupForm from '@/hooks/useSignupForm';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SignupForm = ({ type }: { type: 'Startup' | 'Enabler' }) => {
  const { form, submit, isSubmitting, isValid, errors } = useSignupForm();

  return (
    <Form {...form}>
      <form onSubmit={submit} className='mt-16 mb-12 border-b-2 border-neutrals-916'>
        <FormItem className='mb-6'>
          <FormLabel className='text-xl mb-2'>{type === 'Enabler' ? 'Organization' : 'Startup'} Name</FormLabel>
          <FormControl>
            <Input
              id='name'
              type='text'
              {...form.register('name')}
              className={cn(
                'placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                errors.name && 'border-negative-600 placeholder:text-negative-600'
              )}
            />
          </FormControl>
          <FormMessage className='text-negative-600'>{errors.name?.message}</FormMessage>
        </FormItem>

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

        <FormItem className='mb-6'>
          <FormLabel className='text-xl mb-2'>Confirm Password</FormLabel>
          <FormControl>
            <Input
              id='confirmPassword'
              type='password'
              {...form.register('confirmPassword')}
              className={cn(
                'placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                errors.confirmPassword && 'border-negative-600 placeholder:text-negative-600'
              )}
            />
          </FormControl>
          <FormMessage className='text-negative-600'>{errors.confirmPassword?.message}</FormMessage>
        </FormItem>

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
              {formState.errors.agreeTerms && <FormMessage className='text-negative-600'>{formState.errors.agreeTerms.message}</FormMessage>}
            </FormItem>
          )}
        />

        <Button type='submit' className='px-6 py-3 my-12 bg-primary-600 text-neutrals-50 h-full w-full text-2xl' disabled={!isValid  || isSubmitting}>
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
