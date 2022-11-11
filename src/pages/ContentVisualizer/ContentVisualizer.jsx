import { useParams } from 'react-router-dom';
import styles from './ContentVisualizer.module.css';

import data from '../../data/data.json';

const ContentVisualizer = props => {
  const { id } = useParams();

  const newData = data.dev.modulos;
  // .filter(item => item.medias);
  // console.log('newData', newData.map[1].medias[0].id);

  const mock = newData.filter(item => item.medias);
  console.log(mock);

  // const datamock = newData.medias.filter(item => {
  //   return item.id == id;
  // });
  // console.log('data', datamock);

 

  return <section className={styles.content}>ContentVisualizer</section>;
};

export default ContentVisualizer;
