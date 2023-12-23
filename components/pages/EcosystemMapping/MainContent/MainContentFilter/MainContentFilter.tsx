'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import useFilter from '@/hooks/useFilter';
import React from 'react';

const MainContentFilter = () => {
  const { filter, handleFilter } = useFilter('all');

  return (
    <div className='my-9 mx-16 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Button>Map View</Button>
        <span>:</span>
        <Button variant={filter === 'all' ? 'default' : 'outline_rounded'} onClick={() => handleFilter('all')}>
          All
        </Button>
        <Button variant={filter === 'startup' ? 'default' : 'outline_rounded'} onClick={() => handleFilter('startup')}>
          Startup
        </Button>
        <Button variant={filter === 'enablers' ? 'default' : 'outline_rounded'} onClick={() => handleFilter('enablers')}>
          Enablers
        </Button>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-1'>
          <Image src='/icons/startup-pin.svg' alt='startup pin' width={20} height={20} />
          <span>Startups</span>
        </div>
        <div className='flex items-center gap-1'>
          <Image src='/icons/enabler-pin.svg' alt='startup pin' width={20} height={20} />
          <span>Enablers</span>
        </div>
      </div>
    </div>
  );
};

export default MainContentFilter;
