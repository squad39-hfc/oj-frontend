import styles from './Home.module.css';
import TrailCard from '../../components/TrailCard/TrailCard';
import Layout from '../../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <h2>Trilhas</h2>
        <main>
          <TrailCard />
          <TrailCard />
          <TrailCard />
        </main>
      </section>
    </Layout>
  );
};

export default Home;
