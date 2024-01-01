import React from 'react';

type CertificationsProps = {
  certifications: {
    title: string;
    year_awarded: number;
    description: string;
  }[];
};

const Certifications = ({ certifications }: CertificationsProps) => {
  return (
    <>
      <h1 className='text-3xl text-neutrals-50 mb-6'>Certifications</h1>
      <div className='flex flex-col gap-6'>
        {certifications.map((certification, index) => (
          <div className='flex flex-col gap-3 bg-neutrals-900 py-6 px-9 rounded-md' key={index}>
            <h1 className='text-2xl text-neutrals-50'>{certification.title}</h1>
            <p className='text-xl'>{certification.year_awarded}</p>
            <div className='text-xl'>{certification.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certifications;
