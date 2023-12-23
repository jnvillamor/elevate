import Intro from '@/components/pages/EcosystemMapping/Intro/Intro';
import MainContent from '@/components/pages/EcosystemMapping/MainContent/MainContent';
import Sidebar from '@/components/pages/EcosystemMapping/MainContent/Sidebar/Sidebar';
import React from 'react';

const EcosystemMapping = () => {
  return (
    <>
      <div>
        <Intro />
      </div>
      <div className='max-h-screen h-screen flex flex-col'>
        <div className='flex max-h-[92%] h-[92%]'>
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default EcosystemMapping;
