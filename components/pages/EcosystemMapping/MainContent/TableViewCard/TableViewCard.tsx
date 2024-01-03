import { Startup } from '@/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TableViewCardProps = {
  data: Startup;
};

const TableViewCard = ({ data }: TableViewCardProps) => {
  return (
    <div className='max-w-fit'>
      <div className='rounded-xl my-16' key={data.id}>
        <div className='rounded-t-xl'>
          <Image src={data.image} width={345} height={345} alt='startup' />
        </div>
        <div className='p-6 flex flex-col gap-10 bg-neutrals-916 rounded-b-xl'>
          <div>
            <h1 className='text-xl'>{data.name}</h1>
            <p className='rounded-full text-neutrals-50 px-3 py-1 my-3 bg-primary-600 w-fit '>{data.type}</p>
            <div>
              <div className='flex gap-1'>
                <Image src='/icons/buildings.svg' alt='Buildings' width={20} height={20} />
                <span>{data.industry}</span>
              </div>
              <div className='flex gap-1'>
                <Image src='/icons/map-pin.svg' alt='Buildings' width={20} height={20} />
                <span>{data.location}</span>
              </div>
              <div className='flex gap-1'>
                <Image src='/icons/clock.svg' alt='Buildings' width={20} height={20} />
                <span>{data.founded}</span>
              </div>
            </div>
          </div>
          <Link href={`/ecosystem-mapping/${data.id}`} className='text-primary-600'>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableViewCard;
