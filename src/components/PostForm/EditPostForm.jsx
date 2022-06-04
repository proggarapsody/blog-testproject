import React, { useState } from 'react';

import styles from './post-form.module.scss';

import { useNavigate } from 'react-router-dom';
import Confirm from '../common/Confirm/Confirm';

const EditPostForm = ({ posts, setPosts, post }) => {
  const [formState, setFormState] = useState({ ...post });
  const navigate = useNavigate();
  // state for handle open confirm dialog before deleting of the post
  const [active, setActive] = useState(false);

  // function handle all changes in form
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value ? value.trim() : '' });
  };

  // function handle form submit and edit current post
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    const index = posts.findIndex((el) => el.id === post.id);
    posts[index] = formState;
    setPosts([...posts]);
  };

  // function delete post from all posts list and redirect to main page
  const deletePost = () => {
    setActive(false);
    setPosts(posts.filter((el) => el.id !== post.id));
    navigate('/');
  };

  const handleDeleteBtn = () => {
    setActive(true);
  };

  // function that run when user click YES on the confirm deleting dialog
  const onConfirm = () => {
    setActive(false);
    deletePost();
  };

  // function that run when user click NO on the confirm deleting dialog
  const onReject = () => {
    setActive(false);
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
          onClick={handleDeleteBtn}
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
      <Confirm
        active={active}
        setActive={setActive}
        onConfirm={onConfirm}
        onReject={onReject}
      />
    </form>
  );
};

export default EditPostForm;
