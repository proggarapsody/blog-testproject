import React, { useState } from 'react';
import { usePosts } from '../PostsProvider';
import styles from './post-form.module.scss';
import { v4 as uuidv4 } from 'uuid';

const NewPostForm = ({ handleClose }) => {
  const [formState, setFormState] = useState({});
  const [posts, setPosts] = usePosts();
  // function handle form submit and edit current post
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value ? value.trim() : '' });
  };
  // function delete post from all posts list and redirect to main page
  const handleSubmit = (e) => {
    e.preventDefault();
    posts.unshift({ ...formState, id: uuidv4() });
    setPosts([...posts]);
    handleClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newPostForm}>
      <input
        minLength={3}
        maxLength={20}
        name="title"
        type="text"
        placeholder="title"
        onChange={onFormChange}
        className={styles.newPostFormInput}
      />
      <textarea
        minLength={20}
        name="body"
        placeholder="content"
        onChange={onFormChange}
        className={styles.newPostFormTextarea}
      ></textarea>
      <div className={styles.newPostFormBtns}>
        <button
          className={styles.closeFormBtn + ' secondary-button'}
          type="button"
          onClick={() => handleClose(false)}
        >
          Отмена
        </button>
        <button
          className={styles.formSubmitBtn + ' primary-button'}
          type="submit"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default NewPostForm;
