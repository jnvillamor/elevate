'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import MapView from './MapView';
import TableView from './TableView';

const MainContent = () => {
  const [view, setView] = React.useState<'map' | 'table'>('map');

  return (
    <>
      <div className='pt-12 pb-32 bg-neutrals-950 flex justify-center items-center'>
        <div className='rounded-full border border-primary-50 flex items-center p-1 gap-1'>
          <Button className='rounded-full' variant={view === 'map' ? 'default' : 'ghost'} onClick={() => setView('map')}>
            Map View
          </Button>
          <Button className='rounded-full' variant={view === 'table' ? 'default' : 'ghost'} onClick={() => setView('table')}>
            List View
          </Button>
        </div>
      </div>
      {view === 'map' ? <MapView /> : <TableView />}
    </>
  );
};

export default MainContent;
