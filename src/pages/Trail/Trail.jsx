import styles from './Trail.module.css';

const Trail = props => {
  return (
    <section className={styles.trailContent}>
      <section>
        <div>
          <div>
            <h1>{props.title}</h1>
            <small>
              {props.duration} - {props.contentNumber} conteúdos
            </small>
            <small>Expira em {props.expirationDate}</small>
          </div>
          <p>{props.description}</p>
          <progress max="100" value={props.progress}></progress>{' '}
          <span>
            <small>{props.progress}%</small>
          </span>
          <button>começar agora</button>
        </div>
        <div></div>
      </section>
    </section>
  );
};

export default Trail;
