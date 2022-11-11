import styles from './ContentAccordion.module.css';

import StarIcon from '../../assets/icons/Star.svg';

import PlayIcon from '../../assets/icons/Play.svg';
import { Link } from 'react-router-dom';

const accordionContentItems = {
  dev: {
    progress: 5,
    modulos: [
      {
        title: 'Introdução',
        progress: 30,
        medias: [
          {
            id: 3,
            type: 'video',
            title: 'Introdução',
            link: 'https://www.youtube.com/watch?v=laKM6NOrdbA&ab_channel=4KVideoNature-FocusMusic',
            duration: '5min 32s',
          },
          {
            id: 4,
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
            id: 1,
            type: 'video',
            title: 'Introdução',
            link: 'https://www.youtube.com/watch?v=laKM6NOrdbA&ab_channel=4KVideoNature-FocusMusic',
            duration: '12min 45s',
          },
          {
            id: 2,
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
  // const [accordionContentItems, setAccordionContentItems] = useState();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://mocki.io/v1/ad5eb5ea-250a-4191-9c60-c79183a9e884',
  //     );
  //     console.log(result.data[0]);
  //     setData(result.data[0]);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        {accordionContentItems.dev.modulos.map((modulo, index) => (
          <div
            className={styles.accordionItemWrapper}
            key={`${index}${modulo}`}
          >
            <div className={styles.accordionHeader}>
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
                {modulo.medias.map((media, index) => (
                  <li key={`${media.id}`}>
                    <Link to={`/visualizacao/${media.type}/${media.id}`}>
                      <div>
                        <img src={PlayIcon} alt="Icone de tipo de mídia" />
                        <p>{media.title}</p>
                        <span>
                          <small>{media.duration}</small>
                        </span>
                      </div>
                    </Link>
                    <span>
                      <img
                        className={styles.star}
                        id={`star${index}`}
                        src={StarIcon}
                        alt="Ícone de estrela com intuito de representar a possibilidade de favoritar uma mídia"
                        title="Desculpe! Ainda estamos desenvolvendo a função favoritar!"
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
