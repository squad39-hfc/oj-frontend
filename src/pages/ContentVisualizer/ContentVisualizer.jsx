import { useParams } from 'react-router-dom';
import styles from './ContentVisualizer.module.css';

import Comments from '../../components/Comments/Comments';
import VideoMedia from '../../components/VideoMedia/VideoMedia';

const ContentVisualizer = props => {
  const { id } = useParams();

  return (
    <section className={styles.content}>
      <section className={styles.mediaWrapper}>
        <VideoMedia link="https://www.youtube.com/watch?v=n0KH8dQSrv0&ab_channel=GrupoFCamara" />
      </section>
      <div>
        <h2>Aula 1 - Introdução</h2>
        <Comments></Comments>
      </div>
    </section>
  );
};

export default ContentVisualizer;
