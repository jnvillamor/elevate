'use client';

import Map from '@/components/pages/EcosystemMapping/MainContent/Map/Map';
import Contacts from '@/components/pages/EntityDetails/Contacts/Contacts';
import Details from '@/components/pages/EntityDetails/Details/Details';
import Image from 'next/image';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const StartupDetails = () => {
  const { getValues } = useFormContext();
  const data = getValues();

  const startup = {...data}
  const detials = {
    industry: startup.industry,
    founded: startup.founded,
    employees: startup.employees,
    location: startup.location
  }
  const mapDetails = {
    name: startup.name,
    type: startup.type,
    coords: startup.coords
  }

  return (
    <div className='bg-neutrals-932 text-neutrals-200'>
           
      <div className='max-w-screen-2xl w-full m-auto pt-12 pb-32'>

        <div className='flex flex-col items-center'>
          <Image src={data.image} alt='Logo' width={160} height={160} className='w-72' />
          <h1 className='text-4xl mt-6 mb-3 text-neutrals-50'>{data.name}</h1>
          <div className='rounded-full px-4 py-2 bg-primary-600'>{data.type}</div>
        </div>

        <div className='mb-6 mt-14 block lg:flex justify-between gap-5'>
          <div className='lg:w-1/3 w-full flex flex-col gap-6'>

            <div className='p-9 bg-neutrals-916 rounded-2xl'>
              <Details startup={detials} />
              <div className='w-full aspect-square mt-6'>
                <Map startup={mapDetails}/>
              </div>
            </div>

            <div className='p-9 bg-neutrals-916 rounded-2xl'>
              <Contacts />
            </div>

          </div>

          <div className='lg:w-2/3 w-full flex flex-col gap-6'>
            <div className='bg-neutrals-916 p-6 rounded-3xl'>
              <h1 className='text-3xl text-neutrals-50 mb-9'>About</h1>
              <div className='text-xl line-clamp-[10] mb-6'>{startup.about}</div>
              <div className='flex'>
                <div className='rounded-full px-4 py-2 bg-neutrals-700'>{startup.industry}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetails;

