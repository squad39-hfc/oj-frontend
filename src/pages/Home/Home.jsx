import styles from './Home.module.css';
import TrailCard from '../../components/TrailCard/TrailCard';
// import Layout from '../../layout/Layout';

import UxImage from '../../assets/images/Uxdesign.svg';
import QaImage from '../../assets/images/Qa.svg';
import DevImage from '../../assets/images/Dev.svg';

const Home = () => {
  return (
    // <Layout>
    <section className={styles.container}>
      <section>
        <div>
          <h2>Trilhas</h2>
        </div>
        <main>
          <TrailCard
            title="Ux/UI Design"
            progress="20"
            img={UxImage}
            alt="Foto de Monitor com plantas na frente, passando um ar agradável e harmonioso com intuito de representar a trilha de UX/UI Design"
            description="Melhorando a experiência do usuário através de interfaces."
          />
          <TrailCard
            title="Quality Assurance (QA)"
            progress="5"
            img={QaImage}
            alt="Foto de braços de duas pessoas sentadas em frente a um notebook, passando a ideia de que orientação representando a trilha de Quality Assurance (QA)."
            description="Testando qualidade de aplicações e códigos"
          />
          <TrailCard
            title="Desenvolvimento Full Stack"
            progress="75"
            img={DevImage}
            alt="Foto desfocada de um código de programação em um monitor representando a trilha de Desenvolvimento Full Stack"
            description="Desenvolvendo aplicações completas e aplicando lógica de programação."
          />
        </main>
      </section>
    </section>
    // </Layout>
  );
};

export default Home;
