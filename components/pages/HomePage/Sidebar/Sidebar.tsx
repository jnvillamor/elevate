import React from 'react';
import Image from 'next/image';
import { Input } from '../../../ui/input';
import { Button } from '../../../ui/button';
import CustomCard from '../CustomCard/CustomCard';
import dummydata from '../../../../data/startups.json';
import { Startup } from '../../../../common/index';

const Sidebar = () => {
  const startups: Startup[] = dummydata;

  return (
    <aside className='w-5/12 h-full flex flex-col bg-neutrals-932'>
      <div className='mx-16 my-12 flex items-center'>
        <Input placeholder='Search...' className='rounded-r-none' />
        <Button variant={'outline'} className='rounded-r-sm rounded-l-none bg-primary-600 outline-none border-none hover:bg-primary-500'>
          <Image src='/icons/search-icon.svg' width={20} height={20} alt='search' />
        </Button>
        <Button variant={'outline'} className='border-none p-0 outline-none ml-4 hover:bg-transparent'>
          <Image src='/icons/sliders-horizontal.svg' width={32} height={32} alt='sliders' />
        </Button>
      </div>
      <div className='overflow-auto flex-1'>
        {startups.map((startup) => (
          <CustomCard key={startup.name} {...startup} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
