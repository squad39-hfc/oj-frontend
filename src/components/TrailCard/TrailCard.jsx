import styles from './TrailCard.module.css';

const TrailCard = props => {
  return (
    <section className={styles.trail}>
      <div className={styles.imgContainer}>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className={styles.info}>
        <div className={styles.progress}>
          <progress max="100" value={props.progress}></progress>
          <small>{props.progress}% completo</small>
        </div>

        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </section>
  );
};

export default TrailCard;
