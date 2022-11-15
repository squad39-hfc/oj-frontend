import { useParams } from 'react-router-dom';
import styles from './ContentVisualizer.module.css';

import Comments from '../../components/Comments/Comments';
import VideoMedia from '../../components/VideoMedia/VideoMedia';

import LeftIcon from '../../assets/icons/Left.svg';
import RightIcon from '../../assets/icons/Right.svg';

const ContentVisualizer = props => {
  const { id } = useParams();

  // const videoData = data.filter(item => +item.id === +id);

  return (
    <section className={styles.content}>
      <section className={styles.mediaWrapper}>
        <VideoMedia link="https://www.youtube.com/watch?v=n0KH8dQSrv0&ab_channel=GrupoFCamara" />
        <div className={styles.videoPanel}>
          <div className={styles.videoButtons}>
            <button>
              <img
                src={LeftIcon}
                alt="Seta para esquerda indicando a possibilidade de retroceder"
              />
            </button>
            <button>
              <img
                src={RightIcon}
                alt="Seta para esquerda indicando a possibilidade de avançar"
              />
            </button>
          </div>
        </div>
      </section>
      <div>
        <h2>Aula 1 - Introdução</h2>
        <Comments></Comments>
      </div>
    </section>
  );
};

export default ContentVisualizer;
