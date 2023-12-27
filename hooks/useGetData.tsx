import React from 'react';
import dummyData from '../data/startups.json';
import { Filters, Startup } from '@/common';

const useGetData = () => {
  const mainData = dummyData as Startup[];
  const [filteredData, setFilteredData] = React.useState(mainData);

  const filterData = (filters: Filters) => {
    const { sort_by, categories } = filters;

    let data = mainData;

    // filter by categories
    if (categories.length > 0) {
      data = data.filter((item) => {
        return categories.includes(item.industry);
      });

      setFilteredData(data);
    }

    // filter by sort_by values
    if (sort_by === 'etl') {
      data = data.sort((a, b) => {
        const yearA = parseInt(a.founded);
        const yearB = parseInt(b.founded);

        return yearA - yearB;
      });
    } else {
      data = data.sort((a, b) => {
        const yearA = parseInt(a.founded);
        const yearB = parseInt(b.founded);

        return yearB - yearA;
      });
    }

    setFilteredData(data);
  };

  const getIndustries = () => {
    let data = mainData;

    const industries = data.map((item) => item.industry);

    // remove duplicates
    const uniqueIndustries = [...new Set(industries)];
    return uniqueIndustries;
  };

  return { filteredData, filterData, getIndustries };
};

export default useGetData;
