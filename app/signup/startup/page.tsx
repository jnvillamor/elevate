import StartupForm from '@/components/pages/Signup/Startup/StartupForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

const signup_as_startup = () => {
  return (
    <div className='bg-neutrals-932 h-screen flex'>
      <div className='w-5/12 lg:block hidden relative text-center'>
        <h1 className='flex flex-col gap-2 text-5xl absolute top-32 font-bold font-test_staff inset-0 '>
          <span>EXPANDING</span> <span>STARTUP</span>
        </h1>
        <Link href='/' className='absolute top-6 left-6'>
          <BiLeftArrowAlt size={32} />
        </Link>
        <Image src='/images/signup-startup-hero.svg' width={500} height={50} alt='Hero' className='w-full h-full' />
      </div>
      <div className='h-screen flex justify-center items-center flex-1'>
        <div className='w-1/2'>
          <p className='text-5xl text-center'>Sign Up as a Startup</p>
          <StartupForm />
          <Link href='/signup/enabler'>
            <Button className='px-6 py-3 w-full text-2xl h-full'>I&apos;m an investing enabler</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signup_as_startup;
