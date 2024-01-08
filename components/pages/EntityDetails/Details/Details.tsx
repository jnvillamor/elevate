import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { TiPencil } from "react-icons/ti";

type DetailsProps = {
  startup: {
    industry: string;
    founded: string;
    employees: string;
    location: string;
  };
  page?: string;
};

const Details = ({ startup, page }: DetailsProps) => {
  return (
    <>
      <div className={`${page === 'profile' ? 'flex justify-between' : ''}`}>
        <h1 className='text-3xl mb-9 text-neutrals-50'>Details</h1>
        {page === 'profile' && (
          <Button variant='ghost'>
            <TiPencil size={24} />
          </Button>
        )}
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-1'>
          <Image src='/icons/buildings.svg' alt='Buildings' width={20} height={20} />
          <span>{startup.industry}</span>
        </div>
        <div className='flex gap-1'>
          <Image src='/icons/clock.svg' alt='Buildings' width={20} height={20} />
          <span>Founded {startup.founded}</span>
        </div>
        <div className='flex gap-1'>
          <Image src='/icons/employees-icon.svg' alt='Buildings' width={20} height={20} />
          <span>{startup.employees} Employees</span>
        </div>
        <div className='flex gap-1'>
          <Image src='/icons/map-pin.svg' alt='Buildings' width={20} height={20} />
          <span>{startup.location}</span>
        </div>
      </div>
    </>
  );
};

export default Details;
