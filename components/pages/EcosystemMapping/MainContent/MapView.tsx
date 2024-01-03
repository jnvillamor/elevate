import React from 'react';
import Result from './Result/Result';
import Map from './Map/Map';
import MapFilter from './MapFillter/MapFilter';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useMyContext } from '@/contexts/DataContextProvider';

const MapView = () => {
  const { data } = useMyContext();

  return (
    <div className='flex'>
      <div className='max-h-screen h-screen w-5/12 bg-neutrals-932'>
        <Result />
      </div>
      <div className='w-7/12 mx-16 flex flex-col'>
        <div className='my-12 flex justify-between'>
          <div className='flex items-center gap-3'>
            <Button>Map View</Button>
            <span>:</span>
            <MapFilter />
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
        <div className='flex-1 pb-20'>
          <Map startup={data} />
        </div>
      </div>
    </div>
  );
};

export default MapView;
