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

    // filter by data_type
    if (filters.data_type !== 'all') {
      data = data.filter((item) => item.type.toLowerCase() === filters.data_type);
    }

    setFilteredData(data);
  };

  const getIndustries = () => {
    let data = mainData;

    const industries = data.map((item) => item.industry);

    // remove duplicates
    const uniqueIndustries = Array.from(new Set(industries));
    return uniqueIndustries;
  };

  const getStartup = (id: string) => {
    const startup = mainData.find((item) => item.id.toString() === id);
    return startup;
  };
  
  return { filteredData, filterData, getIndustries, getStartup };
};

export default useGetData;
