'use client';

import Map from '@/components/pages/EcosystemMapping/MainContent/Map/Map';
import Awards from '@/components/pages/EntityDetails/Awards/Awards';
import Certifications from '@/components/pages/EntityDetails/Certifications/Certifications';
import Contacts from '@/components/pages/EntityDetails/Contacts/Contacts';
import Details from '@/components/pages/EntityDetails/Details/Details';
import useGetData from '@/hooks/useGetData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';

const StartupDetails = ({ params }: { params: { id: string } }) => {
  const { getStartup } = useGetData();
  const startup = getStartup(params.id);

  if (!startup) {
    return null;
  }

  const detials = {
    industry: startup.industry,
    founded: startup.founded,
    employees: startup.employees,
    location: startup.location
  };

  return (
    <div className='bg-neutrals-932 text-neutrals-200'>
      <div className='max-w-screen-2xl w-full m-auto pt-12 pb-32'>
        <Link href='/ecosystem-mapping' className='flex gap-2 text-neutrals-300 mb-16'>
          <FaAngleLeft size={24} />
          <span>Mapping / Startups</span>
        </Link>
        <div className='flex flex-col items-center'>
          <Image src={startup.image} alt='Logo' width={160} height={160} className='w-72' />
          <h1 className='text-4xl mt-6 mb-3 text-neutrals-50'>{startup.name}</h1>
          <div className='rounded-full px-4 py-2 bg-primary-600'>{startup.type}</div>
        </div>
        <div className='mb-6 mt-14 block lg:flex justify-between gap-5'>
          <div className='lg:w-1/3 w-full flex flex-col gap-6'>
            <div className='p-9 bg-neutrals-916 rounded-2xl'>
              <Details startup={detials} />
              <div className='w-full aspect-square mt-6'>
                <Map startup={startup}/>
              </div>
            </div>
            <div className='p-9 bg-neutrals-916 rounded-2xl'>
              <Contacts contacts={startup.contacts} />
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
            {startup.awards && startup.awards.length > 0 && (
              <div className='bg-neutrals-916 p-6 rounded-3xl'>
                <Awards awards={startup.awards} />
              </div>
            )}
            {startup.certifications && startup.certifications.length > 0 && (
              <div className='bg-neutrals-916 p-6 rounded-3xl'>
                <Certifications certifications={startup.certifications} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetails;
