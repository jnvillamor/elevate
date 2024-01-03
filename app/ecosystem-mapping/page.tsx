import React from 'react';
import Intro from '@/components/pages/EcosystemMapping/Intro/Intro';
import MainContent from '@/components/pages/EcosystemMapping/MainContent/MainContent';
import DataContextProvider from '@/contexts/DataContextProvider';

const EcosystemMapping = () => {
  return (
    <>
      <Intro />
      <DataContextProvider>
        <MainContent />
      </DataContextProvider>
    </>
  );
};

export default EcosystemMapping;
