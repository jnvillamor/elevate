'use client';

import { Filters, Startup } from '@/common';
import useFilter from '@/hooks/useFilter';
import useGetData from '@/hooks/useGetData';
import { FC, ReactNode, createContext, useContext, useReducer } from 'react';

interface DataContextType {
  data: Startup[];
  filters: Filters;
  openFilter: boolean;
  handleOpenFilter: () => void;
  setFilters: React.Dispatch<any>;
  filterData: (filters: Filters) => void;
  getIndustries: () => String[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataContextProviderProps {
  children: ReactNode;
}

const DataContextProvider: FC<DataContextProviderProps> = ({ children }) => {
  const { filteredData: data, filterData, getIndustries } = useGetData();
  const { filters, dispatch: setFilters, openFilter, handleOpenFilter } = useFilter();

  const contextValue = {
    data,
    filters,
    openFilter,
    handleOpenFilter,
    setFilters,
    filterData,
    getIndustries,
  };
  
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );

};

export const useMyContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export default DataContextProvider;