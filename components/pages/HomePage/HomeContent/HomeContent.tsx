import React from 'react'
import HomeContentFilter from '../HomeContentFilter/HomeContentFilter'

const HomeContent = () => {
  return (
    <div className='max-h-full w-7/12 flex flex-col'>
      <div>
        <HomeContentFilter />
      </div>
      <div className='mb-6 flex-1 bg-primary-50 mx-16 border rounded-[32px]'>

      </div>
    </div>
  )
}

export default HomeContent