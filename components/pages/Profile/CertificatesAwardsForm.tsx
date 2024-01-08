import { Button } from '@/components/ui/button';
import { Form, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useCertificatesAwardsForm from '@/hooks/useCertificatesAwardsForm';
import { cn } from '@/lib/utils';
import React from 'react';

const CertificatesAwardsForm = ({ type }: { type: 'certifications' | 'awards' }) => {
  const { form, errors, isSubmitting, submit } = useCertificatesAwardsForm({ type: type });

  return (
    <Form {...form}>
      <form onSubmit={submit}>
        {/* Capitalize first letter of type */}
        <h1 className='text-2xl mb-6'>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        <div className='flex flex-col gap-6'>
          <FormItem>
            <FormLabel className='text-neutrals-50 text-xl mb-3'>Title</FormLabel>
            <Input
              {...form.register('title')}
              className={cn(
                'placeholder:text-neutrals-600 focus:border-primary-600 text-neutrals-50 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                errors.title && 'border-negative-600 placeholder:text-negative-600'
              )}
            />
            {errors.title && <FormMessage className='text-negative-600'>{errors.title?.message}</FormMessage>}
          </FormItem>

          <FormItem>
            <FormLabel className='text-neutrals-50 text-xl mb-3'>Year Awarded</FormLabel>
            <Input
              type='number'
              {...form.register('year_awarded')}
              className={cn(
                'placeholder:text-neutrals-600 focus:border-primary-600 text-neutrals-50 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                errors.year_awarded && 'border-negative-600 placeholder:text-negative-600'
              )}
            />
            {errors.year_awarded && <FormMessage className='text-negative-600'>{errors.year_awarded?.message}</FormMessage>}
          </FormItem>

          <FormItem>
            <FormLabel className='text-neutrals-50 text-xl mb-3'>Description</FormLabel>
            <Textarea
              {...form.register('description')}
              maxLength={1000}
              rows={5}
              className='w-full focus-visible:ring-0 bg-neutrals-916 text-neutrals-50 border-nuetrals-300'
            />
            {errors.description && <FormMessage className='text-negative-600'>{errors.description?.message}</FormMessage>}
          </FormItem>
        </div>
        <div className='flex justify-end mt-6'>
          <Button type='submit' disabled={isSubmitting} className='px-6 py-3 text-xl bg-primary-600 rounded-md text-neutrals-50 disabled:opacity-50'>
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CertificatesAwardsForm;
