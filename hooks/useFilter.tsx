import { useState } from "react";

type InitialState = 'all' | 'startup' | 'enablers';

const useFilter = (initialState: InitialState = 'all') => {
  const [filter, setFilter] = useState(initialState);

  const handleFilter = (filter: InitialState) => {
    setFilter(filter)
  }

  return {
    filter,
    handleFilter
  }
}

export default useFilter;