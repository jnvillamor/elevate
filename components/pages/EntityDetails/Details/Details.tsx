import Image from 'next/image';
import React from 'react';
import Map from '../../EcosystemMapping/MainContent/Map/Map';

type DetailsProps = {
  startup: {
    industry: string;
    founded: string;
    employees: string;
    location: string;
  };
};

const Details = ({ startup }: DetailsProps) => {
  return (
    <>
      <h1 className='text-3xl mb-9 text-neutrals-50'>Details</h1>
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
