import React from 'react';
import { SeoHead } from '@/components/common/SeoHead';
import { HomepageRenderer } from '@/components/homepage/HomepageRenderer';

export const Home: React.FC = () => {
  return (
    <>
      <SeoHead />
      <HomepageRenderer />
    </>
  );
};

