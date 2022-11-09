import React from 'react';
import TrailCard from '../../components/TrailCard/TrailCard';
import Layout from '../../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <section>
        <h2>Trilhas</h2>
        <div>
          <TrailCard />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
