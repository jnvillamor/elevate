import Contact from '@/components/pages/EcosystemMapping/Contact/Contact';
import Intro from '@/components/pages/EcosystemMapping/Intro/Intro';
import MainContent from '@/components/pages/EcosystemMapping/MainContent/MainContent';
import Sidebar from '@/components/pages/EcosystemMapping/MainContent/Sidebar/Sidebar';
import React from 'react';

const EcosystemMapping = () => {
  return (
    <>
      <Intro />
      <div className='max-h-screen h-screen flex'>
        <Sidebar />
        <MainContent />
      </div>
      <Contact />
    </>
  );
};

export default EcosystemMapping;
