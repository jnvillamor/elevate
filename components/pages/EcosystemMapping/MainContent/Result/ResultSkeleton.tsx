import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const ResultSkeleton = () => {
  return (
    <div className='h-full flex flex-col relative'>
      <div className='mx-16 my-12 flex flex-col'>
        <Skeleton className='w-full h-12' />
      </div>
      <div className='overflow-auto flex-1 mb-14'>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className='mx-16 bg-neutrals-916 border border-neutrals-300 mb-6'>
              <Skeleton className='w-full h-40' />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResultSkeleton;
