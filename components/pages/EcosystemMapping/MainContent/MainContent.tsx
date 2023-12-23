import React from 'react';
import MainContentFilter from './MainContentFilter/MainContentFilter';
import Map from './Map/Map';

const MainContent = () => {
  return (
    <div className='max-h-full w-7/12 flex flex-col'>
      <div>
        <MainContentFilter />
      </div>
      <div className='mb-14 flex-1 mx-16 rounded-[32px]'>
        <Map />
      </div>
    </div>
  );
};

export default MainContent;
