import React, { useState } from 'react';
import Modal from '../../components/common/Modal/Modal';
import NewPostForm from '../../components/PostForm/NewPostForm';
import PostsList from '../../components/PostsList/PostsList';

import styles from './main-page.module.scss';

const MainPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  // function to open modal window
  const handleAddBtnClick = () => {
    setIsModalActive(true);
  };
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageHeader}>
        <h1 className={styles.mainPageTitle}>Блог</h1>
        <button
          className={styles.mainPageAddBtn + ' primary-button'}
          onClick={handleAddBtnClick}
        >
          +Добавить
        </button>
      </div>

      <PostsList />
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <NewPostForm handleClose={setIsModalActive} />
      </Modal>
    </div>
  );
};

export default MainPage;
