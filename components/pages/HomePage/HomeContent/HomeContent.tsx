import React from 'react'
import HomeContentFilter from '../HomeContentFilter/HomeContentFilter'
import Map from '../Map/Map'

const HomeContent = () => {
  return (
    <div className='max-h-full w-7/12 flex flex-col'>
      <div>
        <HomeContentFilter />
      </div>
      <div className='mb-6 flex-1 mx-16 rounded-[32px]'>
        <Map />
      </div>
    </div>
  )
}

export default HomeContent