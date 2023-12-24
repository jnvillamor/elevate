'use client';

import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';
import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

type Props = {
  handleOpenFilter: () => void;
};

const Filter = (props: Props) => {
  const { handleOpenFilter } = props;

  return (
    <div className='z-10 py-12 px-16 absolute top-0 w-full h-full bg-neutrals-932'>
      <div className='flex justify-between mb-12'>
        <div className='flex gap-2 items-center'>
          <Image src='/icons/sliders-horizontal.svg' width={32} height={32} alt='Filter' />
          <span>Filter</span>
        </div>
        <IoCloseSharp className='text-neutrals-50 hover:cursor-pointer' size={32} onClick={handleOpenFilter} />
      </div>

      <div>
        <div className='mb-16'>
          <Select>
            <SelectTrigger className='w-full focus:outline-none border-neutrals-300 bg-neutrals-916 px-12 py-3 text-neutral-50 text-l font-normal'>
              <SelectValue placeholder='Sort by: ' />
            </SelectTrigger>
            <SelectContent className='bg-neturals-916 text-neutral-50'>
              <SelectGroup></SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='mb-32'>
          <p className='text-neutrals-300 mb-3'>You can select more than 1</p>
          <div className='mb-6'>
            <Select>
              <SelectTrigger className='w-full focus:outline-none border-neutrals-300 bg-neutrals-916 px-12 py-3 text-neutral-50 text-l font-normal'>
                <SelectValue placeholder='Industry' />
              </SelectTrigger>
              <SelectContent className='bg-neturals-916 text-neutral-50'>
                <SelectGroup></SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='flex justify-center'>
          <Button onClick={() => handleOpenFilter()} variant={'outline_rounded'} className='bg-primary-600 text-neutrals-50 border-primary-600 py-2 px-6 text-l hover:bg-primary-400'>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
