import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../ui/card';
import Link from 'next/link';
import { Startup } from '../../common/index';

const CustomCard = ( startup: Startup) => {
  return (
    <Card className='mx-16 bg-neutrals-916 border border-neutrals-300 mb-6'>
      <CardContent className='p-6 flex gap-10 text-neutrals-50'>
        <Image src={startup.image} alt='Logo' width={160} height={160} />
        <div className='flex flex-col justify-between'>
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
          <Link href='/' className='text-primary-600'>
            View More
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
