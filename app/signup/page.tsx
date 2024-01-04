import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const SignUpCard = ({ type }: { type: string }) => {
  const typeInfo = {
    "startup": [
      "Visibility boost",
      "Networking Opportunities",
      "Resource Access"
    ],
    "enabler": [
      "Enhanced Outreach",
      "Exclusive Deal Flow",
      "Networking Hub"
    ],
    "visitor": [
      "Unrestricted Access",
      "User-Friendly Browsing",
      "No Account Needed"
    ]
  }
  
  return (
    <div className='p-9 bg-neutrals-916 rounded-lg'>
      <div className='flex justify-center items-center gap-3 border-b border-neutrals-900 pb-6'>
        <Image src={`/icons/signup-${type}.svg`} alt='signup' width={50} height={50} />
        <span className='text-3xl'>{type === 'enabler' ? 'an' : 'a'} {type}</span>
      </div>
      <div className='flex flex-col gap-6 my-6'>
        {typeInfo[type as keyof typeof typeInfo].map((info: string, index: number) => (
          <div key={index} className='flex gap-3'>
            <div className={cn(
              type === 'startup' && 'text-primary-600',
              type === 'enabler' && 'text-[#E65D10]',
              type === 'visitor' && 'text-[#499D13]'
            )}>
              <FaCheckCircle size={24}/>
            </div>
            <p>{info}</p>
          </div>
        ))}
      </div>
      <Link href={type === 'visitor' ? '/' : `/signup/${type}`}>
        <Button variant='default' className='w-full text-neutrals-50 bg-primary-600 rounded-lg text-xl h-fit p-3'>{type === 'visitor' ? 'Home' : 'Sign Up'}</Button>
      </Link>
    </div>
  );
};

const Signup = () => {
  const userTypes = ['startup', 'enabler', 'visitor'];

  return (
    <div className='bg-neutrals-932 h-screen flex justify-center items-center'>
      <div>
        <h1 className='font-product_sans text-6xl mb-24 text-center'>I am</h1>
        <div className='flex gap-12'>
          {userTypes.map((type) => (
            <SignUpCard type={type} key={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signup;
