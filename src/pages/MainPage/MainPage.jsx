import React, { useState } from 'react';
import Modal from '../../components/common/Modal/Modal';
import NewPostForm from '../../components/NewPostForm/NewPostForm';
import PostsList from '../../components/PostsList/PostsList';
import { PostsProvider } from '../../components/PostsProvider';
import styles from './mainpage.module.scss';

const MainPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const handleAddBtnClick = () => {
    setIsModalActive(true);
  };
  return (
    <PostsProvider>
      <div className={styles.mainPage}>
        <div className={styles.mainPageHeader}>
          <h1 className={styles.mainPageTitle}>Блог</h1>
          <button
            className={styles.mainPageAddBtn}
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
    </PostsProvider>
  );
};

export default MainPage;
