import { Button } from '@/components/ui/button';
import React from 'react';

const Contact = () => {
  return (
    <div className='bg-neutrals-950 py-32 px-16 flex justify-between'>
      <div className='w-7/12 flex flex-col justify-between'>
        <div>
          <h1 className='font-test_staff text-[60px] leading-none mb-12'>
            <span>JOIN OUR</span> <br /> <span className='font-bold'>INNOVARTOR&apos;S CIRLCLE</span>
          </h1>
          <p className='text-3xl'>
            Are you a thriving startup seeking expansion or an enthusiastic enabler eager to invest in the vibrant Davao startup scene? Be a crucial
            part of our success story – join us today!
          </p>
        </div>
        <div>
          <Button variant='outline_rounded' className='border-primary-500 text-primary-500 hover:bg-primary-300 hover:text-neutral-950'>
            Contact Us
          </Button>
        </div>
      </div>
      <div className='w-1/4'>
        <h1 className='text-[60px] font-test_staff_x font-bold'>I AM...</h1>
        <Button
          variant='outline'
          className='border-primary-500 text-primary-500 w-full py-16 mb-6 flex flex-col leading-none font-test_staff text-3xl font-normal hover:bg-primary-300 hover:text-neutral-950'>
          <span>Expanding</span> <span>Startup</span>
        </Button>
        <Button
          variant='outline'
          className='border-primary-500 text-primary-500 w-full py-16 flex flex-col leading-none font-normal font-test_staff text-3xl hover:bg-primary-300 hover:text-neutral-950'>
          <span>Investment</span> <span>Enabler</span>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
