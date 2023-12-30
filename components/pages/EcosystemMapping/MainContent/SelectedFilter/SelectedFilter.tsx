import { useMyContext } from '@/context/DataContextProvider'
import React from 'react'

const SelectedFilter = () => {
  const { filters }  = useMyContext();
  return (
    <div className='gap-3 items-center w-full flex text-nowrap overflow-auto horizontal__bar'>
            <span className='rounded-full bg-neutrals-700 px-4 py-2'>
              {filters.sort_by === 'etl' ? 'Earliest to Latest Establishment' : 'Latest to Earliest Establishment'}
            </span>
            <span className='border border-primary-50 h-full'></span>
            {filters.categories.map((category) => (
              <span className='rounded-full bg-neutrals-700 px-4 py-2' key={category}>
                {category}
              </span>
            ))}
          </div>
  )
}

export default SelectedFilter