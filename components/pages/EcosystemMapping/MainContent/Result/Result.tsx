import React from 'react';
import MapViewCard from '../MapViewCard/MapViewCard';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import { useMyContext } from '@/context/DataContextProvider';
import SelectedFilter from '../SelectedFilter/SelectedFilter';

const Result = () => {
  const { data, openFilter, handleOpenFilter } = useMyContext();

  return (
    <div className='h-full flex flex-col relative'>
      <div className='mx-16 my-12 flex flex-col'>
        <div className='flex'>
          <SearchBar handleOpenFilter={handleOpenFilter} />
        </div>
        <SelectedFilter />
      </div>
      <div className='overflow-auto flex-1 mb-14'>
        {data.map((startup) => (
          <MapViewCard key={startup.name} {...startup} />
        ))}
      </div>
      {openFilter && <Filter />}
    </div>
  );
};

export default Result;
