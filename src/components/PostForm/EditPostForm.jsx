import React, { useState } from 'react';
import { usePosts } from '../PostsProvider';
import styles from './post-form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const EditPostForm = ({ posts, setPosts, post }) => {
  const [formState, setFormState] = useState({ ...post });
  const navigate = useNavigate();

  // function handle all changes in form
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value ? value.trim() : '' });
  };
  // function handle form submit and edit current post
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    const index = posts.findIndex((el) => el.id == post.id);
    posts[index] = formState;
    setPosts([...posts]);
  };
  // function delete post from all posts list and redirect to main page
  const deletePost = () => {
    setPosts(posts.filter((el) => el.id != post.id));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.editPostForm}>
      <input
        minLength={3}
        maxLength={20}
        name="title"
        type="text"
        placeholder="title"
        onChange={onFormChange}
        className={styles.editPostFormInput}
        defaultValue={post.title}
      />
      <textarea
        minLength={20}
        name="body"
        placeholder="content"
        onChange={onFormChange}
        className={styles.editPostFormTextarea}
        defaultValue={post.body}
      ></textarea>
      <div className={styles.editPostFormBtns}>
        <button
          className={styles.deletePostBtn + ' secondary-button'}
          type="button"
          onClick={deletePost}
        >
          Удалить
        </button>
        <button
          className={styles.editPostBtn + ' primary-button'}
          type="submit"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default EditPostForm;
