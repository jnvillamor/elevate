'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import useFilter from '@/hooks/useFilter';
import React from 'react';
import useMapFilter from '@/hooks/useMapFilter';

const MapFilter = () => {
  const { mapFilter, handleMapFilter } = useMapFilter('all');

  return (
    <div className='my-9 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Button>Map View</Button>
        <span>:</span>
        <Button variant={ mapFilter === 'all' ? 'default' : 'outline_rounded'} onClick={() => handleMapFilter('all')}>
          All
        </Button>
        <Button variant={ mapFilter === 'startup' ? 'default' : 'outline_rounded'} onClick={() => handleMapFilter('startup')}>
          Startup
        </Button>
        <Button variant={ mapFilter === 'enablers' ? 'default' : 'outline_rounded'} onClick={() => handleMapFilter('enablers')}>
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

export default MapFilter;
