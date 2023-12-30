import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { useMyContext } from '@/context/DataContextProvider';
import MapFilter from './MapFillter/MapFilter';
import SelectedFilter from './SelectedFilter/SelectedFilter';
import TableViewCard from './TableViewCard/TableViewCard';

const TableView = () => {
  const { handleOpenFilter, setFilters, openFilter, filters, data } = useMyContext();

  return (
    <div className='pt-11 bg-neutrals-950 px-56 relative w-full border border-b-neutrals-300'>
      <div className='bg-neutrals-916 rounded-md'>
        <div className='flex items-center bg-neutrals-932 px-12 py-6 rounded-t-md'>
          <SearchBar handleOpenFilter={handleOpenFilter} />
        </div>
        <div className='flex justify-between px-12 py-6 rounded-b-md'>
          <SelectedFilter />
          <MapFilter />
        </div>
      </div>
      <div className='gap-9 flex-wrap flex'>
        {data.map((startup) => (
          <TableViewCard data={startup} key={startup.id} />
        ))}
      </div>
    </div>
  );
};

export default TableView;
