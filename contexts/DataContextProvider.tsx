'use client';

import { Filters, Startup } from '@/common';
import useFilter from '@/hooks/useFilter';
import useGetData from '@/hooks/useGetData';
import { FC, ReactNode, createContext, useContext, useEffect } from 'react';

interface DataContextType {
  data: Startup[];
  filters: Filters;
  openFilter: boolean;
  isFetching: boolean;
  handleOpenFilter: () => void;
  setFilters: React.Dispatch<any>;
  filterData: (filters: Filters) => void;
  getIndustries: () => string[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataContextProviderProps {
  children: ReactNode;
}

const DataContextProvider: FC<DataContextProviderProps> = ({ children }) => {
  const { filteredData: data, isFetching, filterData, getIndustries } = useGetData();
  const { filters, dispatch: setFilters, openFilter, handleOpenFilter } = useFilter();

  useEffect(() => {
    const handleFilter = () => {
      filterData(filters);
    };

    handleFilter();
  }, [filters]);

  const contextValue = {
    data,
    filters,
    openFilter,
    isFetching,
    handleOpenFilter,
    setFilters,
    filterData,
    getIndustries
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useMyContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export default DataContextProvider;
