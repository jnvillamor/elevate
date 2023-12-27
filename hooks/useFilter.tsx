import { Filters } from '@/common';
import React from 'react';

const useFilter = () => {
  const [filters, dispatch] = React.useReducer(
    (state: Filters, action: any) => {
      switch (action.type) {
        case 'sort_by':
          return { ...state, sort_by: action.payload };
        case 'categories':
          return { ...state, categories: action.payload };
        default:
          return state;
      }
    },
    {
      sort_by: 'etl',
      categories: []
    }
  );

  const [openFilter, setOpenFilter] = React.useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  }

  return {
    filters,
    openFilter,
    dispatch,
    handleOpenFilter
  }
};

export default useFilter;
