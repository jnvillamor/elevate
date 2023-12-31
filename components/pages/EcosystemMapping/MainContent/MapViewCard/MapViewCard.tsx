import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../../../../ui/card';
import Link from 'next/link';
import { Startup } from '../../../../../common/index';

const MapViewCard = (startup: Startup) => {
  return (
    <Card className='mx-16 bg-neutrals-916 border border-neutrals-300 mb-6'>
      <CardContent className='p-6 flex gap-10 text-neutrals-50'>
        <div className='w-1/3 border'>
          <Image src={startup.image} alt='Logo' width={160} height={160} className='h-full w-full' />
        </div>
        <div className='w-2/3 flex flex-col justify-between'>
          <CardTitle>{startup.name}</CardTitle>
          <div>
            <div className='flex gap-1'>
              <Image src='/icons/buildings.svg' alt='Buildings' width={20} height={20} />
              <span>{startup.industry}</span>
            </div>
            <div className='flex gap-1'>
              <Image src='/icons/map-pin.svg' alt='Buildings' width={20} height={20} />
              <span>{startup.location}</span>
            </div>
            <div className='flex gap-1'>
              <Image src='/icons/clock.svg' alt='Buildings' width={20} height={20} />
              <span>{startup.founded}</span>
            </div>
          </div>
          <Link href={`/ecosystem-mapping/${startup.id}`} className='text-primary-600'>
            View More
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapViewCard;
