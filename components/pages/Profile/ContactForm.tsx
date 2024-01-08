import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useAddContactForm from '@/hooks/useAddContactForm';
import { cn } from '@/lib/utils';
import React from 'react';

const ContactForm = () => {
  const { form, errors, contactType, isSubmitting, submit } = useAddContactForm();

  return (
    <Form {...form}>
      <form onSubmit={submit}>
        {contactType.map((type, i) => (
          <div key={i} className='mb-6'>
            <div className='flex items-center gap-3'>
              <div className='w-1/2 py-3 bg-neutrals-916 rounded-xl border-neutrals-300 text-center'>{type}</div>
              <Input
                placeholder='https://example.com'
                className={cn(
                  'placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-6 py-3 border-neutrals-600',
                  errors[type] && 'border-negative-600 placeholder:text-negative-600'
                )}
                {...form.register(type)}
              />
            </div>
            {errors[type] && <p className='text-negative-600 text-right'>{errors[type]?.message}</p>}
          </div>
        ))}
        <div className='w-full flex justify-end'>
          <Button variant='default' disabled={isSubmitting} className='bg-primary-600 border-none text-neutrals-50 text-xl w-fit h-full px-6 py-3 rounded-md'>
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
