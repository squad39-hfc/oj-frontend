import styles from './ContentAccordion.module.css';

const ContentAccordion = () => {
  return (
    <div>
      <div className={styles.accordionHeader}></div>
      <div className={styles.accordionBody}></div>
    </div>
  );
};

export default ContentAccordion;
