'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { useMyContext } from '@/contexts/DataContextProvider';

const MapFilter = () => {
  const { filters, setFilters } = useMyContext();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Button
          variant={filters.data_type === 'all' ? 'default' : 'outline_rounded'}
          onClick={() => setFilters({ type: 'data_type', payload: 'all' })}>
          All
        </Button>
        <Button
          variant={filters.data_type === 'startup' ? 'default' : 'outline_rounded'}
          onClick={() => setFilters({ type: 'data_type', payload: 'startup' })}>
          Startup
        </Button>
        <Button
          variant={filters.data_type === 'enabler' ? 'default' : 'outline_rounded'}
          onClick={() => setFilters({ type: 'data_type', payload: 'enabler' })}>
          Enablers
        </Button>
      </div>
    </div>
  );
};

export default MapFilter;
