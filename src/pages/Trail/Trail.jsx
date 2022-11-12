import { useState } from 'react';
import ContentAccordion from '../../components/ContentAccordion/ContentAccordion';
import styles from './Trail.module.css';
import PencilIcon from '../../assets/icons/Pencil.svg';

const Trail = props => {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <section className={styles.trailContent}>
      <section className={styles.trailInfo}>
        <div>
          <div className={styles.mainInfo}>
            <h1>{props.title}</h1>
            <small>
              {props.duration} - {props.contentNumber} conteúdos
            </small>
            <small>Expira em {props.expirationDate}</small>
          </div>
          <p>{props.description}</p>
          <div className={styles.progressInfo}>
            <progress max="100" value={props.progress}></progress>
            <span>
              <small>{props.progress}%</small>
            </span>
          </div>
          <button>
            <h4>começar agora</h4>
          </button>
        </div>
      </section>
      <section className={styles.contentAccordion}>
        <ContentAccordion />
        {isAdmin && (
          <button>
            <h4 className={styles.editButton}>Editar &nbsp; trilha</h4>
            <img
              src={PencilIcon}
              alt="Ícone de Lápis representando a possibilidade de editar"
            />
          </button>
        )}
      </section>
    </section>
  );
};

export default Trail;
