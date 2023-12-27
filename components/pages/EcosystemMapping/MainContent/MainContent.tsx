'use client';

import React from 'react';
import MapFilter from './MapFillter/MapFilter';
import Map from './Map/Map';
import useMapFilter from '@/hooks/useMapFilter';
import useFilter from '@/hooks/useFilter';
import useGetData from '@/hooks/useGetData';
import Filter from './Filter/Filter';
import Result from './Result/Result';

const MainContent = () => {
  const { mapFilter, handleMapFilter } = useMapFilter();
  const { filters, openFilter, handleOpenFilter, dispatch } = useFilter();
  const { filteredData, filterData } = useGetData();
    
  return (
    <div className='max-h-screen h-screen flex'>
      <div className='w-5/12 h-full flex flex-col bg-neutrals-932 relative'>
        {openFilter && <Filter handleOpenFilter={handleOpenFilter} filterData={filterData} filters={filters} dispatch={dispatch} />}
        <Result handleOpenFilter={handleOpenFilter} data={filteredData} />
      </div>
      <div className='max-h-full w-7/12 flex flex-col mx-16'>
        <MapFilter />
        <Map />
      </div>
    </div>
  );
};

export default MainContent;
