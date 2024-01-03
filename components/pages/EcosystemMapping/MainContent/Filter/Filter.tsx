'use client';

import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';
import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Multiselect from '../CustomMultiselect/Multiselect';
import { useMyContext } from '@/contexts/DataContextProvider';

const Filter = () => {
  const { filters, setFilters, handleOpenFilter, getIndustries } = useMyContext();
  const options = getIndustries();
  const [selected, setSelected] = React.useState<string[]>(filters.categories);
  const [sort_by, setSortBy] = React.useState<string>(filters.sort_by);

  const handleFilter = () => {
    const newValue = {
      ...filters,
      categories: selected,
      sort_by: sort_by
    };
    setFilters({ type: 'whole_change', payload: newValue });
    handleOpenFilter();
  };

  return (
    <div className='z-10 py-12 px-16 absolute top-0 w-full h-full bg-neutrals-932'>
      <div className='flex justify-between mb-12'>
        <div className='flex gap-2 items-center'>
          <Image src='/icons/sliders-horizontal.svg' width={32} height={32} alt='Filter' />
          <span>Filter</span>
        </div>
        <IoCloseSharp className='text-neutrals-50 hover:cursor-pointer' size={32} onClick={handleOpenFilter} />
      </div>

      <div>
        <div className='mb-16'>
          <Select value={sort_by} onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className='w-full focus:outline-none border-neutrals-300 bg-neutrals-916 px-12 py-3 text-neutral-50 text-lg font-normal'>
              <SelectValue placeholder='Sort by: ' />
            </SelectTrigger>
            <SelectContent className='bg-neturals-916 text-neutral-50'>
              <SelectGroup className='bg-neutrals-916'>
                <SelectItem value='etl' className='text-lg hover:bg-neutrals-700 hover:text-neutrals-50 focus:bg-neutrals-700 focus:text-neutrals-50'>
                  Earliest to Latest Establishment
                </SelectItem>
                <SelectItem value='lte' className='text-lg hover:bg-neutrals-700 hover:text-neutrals-50 focus:bg-neutrals-700 focus:text-neutrals-50'>
                  Latest to Earliest Establishment
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='mb-32'>
          <p className='text-neutrals-300 mb-3'>You can select more than 1</p>
          <Multiselect options={options} values={selected} onChange={setSelected} />
        </div>
        <div className='flex justify-center'>
          <Button
            onClick={() => handleFilter()}
            variant={'outline_rounded'}
            className='bg-primary-600 text-neutrals-50 border-primary-600 py-2 px-6 text-l hover:bg-primary-400'>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
