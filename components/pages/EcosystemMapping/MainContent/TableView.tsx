import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { useMyContext } from '@/context/DataContextProvider';
import MapFilter from './MapFillter/MapFilter';
import SelectedFilter from './SelectedFilter/SelectedFilter';
import TableViewCard from './TableViewCard/TableViewCard';
import Link from 'next/link';
import { TfiAngleDoubleLeft } from 'react-icons/tfi';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';

const TableView = () => {
  const { handleOpenFilter, setFilters, openFilter, filters, data } = useMyContext();

  return (
    <div className='bg-neutrals-950'>
      <div className='max-w-screen-2xl m-auto pt-11 relative w-full border-b border-neutrals-300'>
        <div className='bg-neutrals-916 rounded-md'>
          <div className='flex items-center bg-neutrals-932 px-12 py-6 rounded-t-md'>
            <SearchBar handleOpenFilter={handleOpenFilter} />
          </div>
          <div className='flex justify-between px-12 py-6 rounded-b-md'>
            <SelectedFilter />
            <MapFilter />
          </div>
        </div>
        <div className='gap-9 flex-wrap flex justify-center'>
          {data.map((startup) => (
            <TableViewCard data={startup} key={startup.id} />
          ))}
        </div>
        <div className='mt-16 mb-32 flex gap-1 text-neutrals-300 justify-center'>
          <Link href='/'>
            <TfiAngleDoubleLeft size={24} />
          </Link>
          <Link href='/'>
            <TfiAngleLeft size={24} />
          </Link>
          <span className='mx-2'>1 of 1</span>
          <Link href='/'>
            <TfiAngleRight size={24} />
          </Link>
          <Link href='/'>
            <TfiAngleDoubleRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableView;
