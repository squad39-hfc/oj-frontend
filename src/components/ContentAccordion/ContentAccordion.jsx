import styles from './ContentAccordion.module.css';

import ArrowDown from '../../assets/icons/ArrowDown.svg';
import StarIcon from '../../assets/icons/Star.svg';
import PlayIcon from '../../assets/icons/Play.svg';

const accordionContentItems = {
  dev: {
    progress: 5,
    modulos: [
      {
        title: 'Introdução',
        progress: 30,
        medias: [
          {
            type: 'video',
            title: 'Introdução',
            link: 'https://www.youtube.com/watch?v=laKM6NOrdbA&ab_channel=4KVideoNature-FocusMusic',
            duration: '5min 32s',
          },
          {
            type: 'article',
            title: 'Artigo Exemplo',
            link: 'http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf',
            duration: '1min',
          },
        ],
      },
      {
        title: 'Módulo 1',
        progress: 20,
        medias: [
          {
            type: 'video',
            title: 'Introdução',
            link: 'https://www.youtube.com/watch?v=laKM6NOrdbA&ab_channel=4KVideoNature-FocusMusic',
            duration: '12min 45s',
          },
          {
            type: 'article',
            title: 'Artigo Exemplo',
            link: 'http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf',
            duration: '2min',
          },
        ],
      },
    ],
  },
};

const ContentAccordion = () => {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        {accordionContentItems.dev.modulos.map((modulo, index) => (
          <div className={styles.accordionItemWrapper}>
            <div className={styles.accordionHeader} key={`${modulo}${index}`}>
              <div className={styles.titleWrapper}>
                <h4>{modulo.title}</h4>
              </div>
              <div className={styles.accordionProgressInfo}>
                <progress max="100" value={modulo.progress}></progress>
                <span>
                  <small>{modulo.progress}%</small>
                </span>
              </div>
            </div>
            <div className={styles.accordionContent}>
              <ul>
                {modulo.medias.map(media => (
                  <li>
                    <div>
                      <img src={PlayIcon} alt="Icone de tipo de mídia" />
                      <p>{media.title}</p>
                      <span>
                        <small>{media.duration}</small>
                      </span>
                    </div>
                    <span>
                      <img
                        src={StarIcon}
                        alt="Icone de estrela com intuito de representar a possibilidade de favoritar uma mídia"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentAccordion;
