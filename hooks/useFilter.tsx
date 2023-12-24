import { useState } from 'react';

type InitialState = 'all' | 'startup' | 'enablers';
type Filters = {
  industry: string[];
  sort_by: string;
};

const useFilter = (initialState: InitialState = 'all') => {
  const [filter, setFilter] = useState(initialState);
  const [filters, setFilters] = useState<Filters>({
    industry: [],
    sort_by: ''
  });
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  }
  
  const handleFilter = (filter: InitialState) => {
    setFilter(filter);
  };

  return {
    filter,
    filters,
    openFilter,
    handleFilter,
    handleOpenFilter
  };
};

export default useFilter;
