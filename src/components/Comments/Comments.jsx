import styles from './Comments.module.css';
import PersonImg from '../../assets/icons/Person.svg';
import { useState } from 'react';

const Comments = props => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleCommentButton = () => {
    if (!comment) return;
    setCommentList([...commentList, comment]);
    setComment('');
  };

  return (
    <section className={styles.Comments}>
      <h4>Comentários</h4>
      <section className={styles.commentsList}>
        {commentList.length > 0 &&
          commentList.map(item => (
            <div>
              <img
                src={PersonImg}
                alt="Imagem de Usuário, se não houver, exibe ícone padrão."
              />
              <p>{item}</p>
            </div>
          ))}
      </section>
      <div className={styles.newCommentWrapper}>
        <div>
          <img
            src={PersonImg}
            alt="Imagem de Usuário, se não houver, exibe ícone padrão."
          />
          <textarea
            placeholder="Escreva seu comentário..."
            value={comment}
            onChange={event => setComment(event.target.value)}
          />
        </div>
        <button onClick={handleCommentButton}>
          <h4>Publicar</h4>
        </button>
      </div>
    </section>
  );
};

export default Comments;
