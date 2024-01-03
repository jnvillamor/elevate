import React from 'react';
import Contact from '@/components/pages/EcosystemMapping/Contact/Contact';
import Intro from '@/components/pages/EcosystemMapping/Intro/Intro';
import MainContent from '@/components/pages/EcosystemMapping/MainContent/MainContent';
import DataContextProvider from '@/context/DataContextProvider';

const EcosystemMapping = () => {
  return (
    <>
      <Intro />
      <DataContextProvider>
        <MainContent />
      </DataContextProvider>
      <Contact />
    </>
  );
};

export default EcosystemMapping;
