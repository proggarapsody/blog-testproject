import React, { useState } from 'react';
import styles from './newpost-form.module.scss';

const NewPostForm = ({ handleClose }) => {
  const [formState, setFormState] = useState({});

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value ? value.trim() : '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          className={styles.closeFormBtn}
          type="button"
          onClick={() => handleClose(false)}
        >
          Отмена
        </button>
        <button className={styles.formSubmitBtn} type="submit">
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default NewPostForm;
