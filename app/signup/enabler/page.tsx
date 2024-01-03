import EnablerForm from '@/components/pages/Signup/Enabler/EnablerForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

const signup_as_enabler = () => {
  return (
    <div className='bg-neutrals-932 h-screen flex'>
      <div className='h-screen flex justify-center items-center flex-1 relative'>
        <Link href='/' className='absolute top-6 left-6'>
          <BiLeftArrowAlt size={32} />
        </Link>
        <div className='w-1/2'>
          <p className='text-5xl text-center'>Sign Up as an Enabler</p>
          <EnablerForm />
          <Link href='/signup/startup'>
            <Button className='px-6 py-3 w-full text-2xl h-full'>I&apos;m an expanding startup</Button>
          </Link>
        </div>
      </div>
      <div className='w-5/12 lg:block relative hidden text-center'>
        <h1 className='flex flex-col gap-2 text-5xl absolute top-32 font-bold font-test_staff inset-0 '>
          <span>ENABLERS &</span> <span>INVESTORS</span>
        </h1>
        <Image src='/images/signup-enabler-hero.svg' width={500} height={50} alt='Hero' className='w-full h-full' />
      </div>
    </div>
  );
};

export default signup_as_enabler;
