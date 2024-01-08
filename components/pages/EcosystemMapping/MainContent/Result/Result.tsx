import React from 'react';
import MapViewCard from '../MapViewCard/MapViewCard';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import { useMyContext } from '@/contexts/DataContextProvider';
import SelectedFilter from '../SelectedFilter/SelectedFilter';
import ResultSkeleton from './ResultSkeleton';

const Result = () => {
  const { data, openFilter, isFetching, handleOpenFilter } = useMyContext();

  if (isFetching) {
    return <ResultSkeleton />;
  }

  return (
    <div className='h-full flex flex-col relative'>
      <div className='mx-16 my-12 flex flex-col'>
        <div className='flex'>
          <SearchBar handleOpenFilter={handleOpenFilter} />
        </div>
        <SelectedFilter />
      </div>
      <div className='overflow-auto flex-1 mb-14'>
        {data?.map((startup) => (
          <MapViewCard key={startup.name} {...startup} />
        ))}
      </div>
      {openFilter && <Filter />}
    </div>
  );
};

export default Result;
