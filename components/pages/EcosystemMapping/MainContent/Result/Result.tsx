import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Startup } from '@/common';
import Image from 'next/image';
import React from 'react';
import CustomCard from '../CustomCard/CustomCard';

type Props = {
  handleOpenFilter: () => void;
  data: Startup[];
};

const Result = ({ handleOpenFilter, data }: Props) => {

  return (
    <>
      <div className='mx-16 my-12 flex items-center'>
        <Input placeholder='Search...' className='rounded-r-none' />
        <Button variant={'outline'} className='rounded-r-sm rounded-l-none bg-primary-600 outline-none border-none hover:bg-primary-500'>
          <Image src='/icons/search-icon.svg' width={20} height={20} alt='search' />
        </Button>
        <Button onClick={() => handleOpenFilter()} variant={'outline'} className='border-none p-0 outline-none ml-4 hover:bg-transparent'>
          <Image src='/icons/sliders-horizontal.svg' width={32} height={32} alt='sliders' />
        </Button>
      </div>
      <div className='overflow-auto flex-1 mb-14'>
        {data.map((startup) => (
          <CustomCard key={startup.name} {...startup} />
        ))}
      </div>
    </>
  );
};

export default Result;
