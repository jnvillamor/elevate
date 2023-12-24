'use client';

import React from 'react';
import Result from './Result/Result';
import useFilter from '@/hooks/useFilter';
import Filter from './Filter/Filter';

const Sidebar = () => {
  const { openFilter, handleOpenFilter } = useFilter();

  return (
    <aside className='w-5/12 h-full flex flex-col bg-neutrals-932 relative'>
      {openFilter && <Filter handleOpenFilter={handleOpenFilter} />}
      <Result handleOpenFilter={handleOpenFilter} />
    </aside>
  );
};

export default Sidebar;
