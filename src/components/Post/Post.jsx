import React from 'react';
import { Link } from 'react-router-dom';
import styles from './post.module.scss';

const Post = ({ id, title, body }) => {
  return (
    <div className={styles.postContainer}>
      <h3 className={styles.postTitle}>{title}</h3>
      <div className={styles.postBody}>
        <p className={styles.postBodyText}>{body}</p>
      </div>

      <Link className={styles.postBtn + ' primary-button'} to={`post/:${id}`}>
        перейти
      </Link>
    </div>
  );
};

export default Post;
