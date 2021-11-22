import React from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import GridSystem from './GridSystem';
import HomepageBanner from './HomepageBanner';

const Home = () => {
  return (
    <BaseLayout>
      {/* banner */}
      <HomepageBanner />

      {/* grids */}
      <GridSystem text="Hier komt een mega leuke tekst over wat we allemaal aanbieden. JOEPIE ! unlucky" />
    </BaseLayout>
  )
}

export default Home;
;