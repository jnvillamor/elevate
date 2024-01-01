import React from 'react';

type AwardsProps = {
  awards: {
    title: string;
    year_awarded: number;
  }[];
};

const Awards = ({ awards }: AwardsProps) => {
  return (
    <>
      <h1 className='text-3xl mb-9'>Awards</h1>
      <div className='flex flex-col gap-6'>
        {awards.map((award, index) => (
          <div className='px-9 py-6 bg-neutrals-900 rounded-md' key={index}>
            <h1 className='text-2xl mb-3 text-neutrals-50'>{award.title}</h1>
            <p className='text-xl'>{award.year_awarded}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;
