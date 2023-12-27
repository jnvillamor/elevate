import React from 'react'

type InitialMapFilter = 'all' | 'startup' | 'enablers';

const useMapFilter = (initialMapFilter: InitialMapFilter) => {
  const [mapFilter, setMapFilter] = React.useState(initialMapFilter)

  const handleMapFilter = (filter: InitialMapFilter) => {
    setMapFilter(filter);
  }

  return {
    mapFilter,
    handleMapFilter
  }
}

export default useMapFilter