'use client';

import { Button } from '@/components/ui/button';
import useFilter from '@/hooks/useFilter';
import React from 'react';

const HomeContentFilter = () => {
  const { filter, handleFilter } = useFilter('all');

  return (
    <div className='my-9 mx-16 flex items-center gap-3'>
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
  );
};

export default HomeContentFilter;
