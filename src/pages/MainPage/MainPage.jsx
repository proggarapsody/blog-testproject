import React, { useEffect, useState } from 'react';
import Modal from '../../components/common/Modal/Modal';
import PostsList from '../../components/PostsList/PostsList';
import styles from './mainpage.module.scss';

const MainPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const handleAddBtnClick = () => {
    setIsModalActive(true);
  };
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageHeader}>
        <h1 className={styles.mainPageTitle}>Блог</h1>
        <button className={styles.mainPageAddBtn} onClick={handleAddBtnClick}>
          +Добавить
        </button>
      </div>

      <PostsList />
      <Modal active={isModalActive} setActive={setIsModalActive}></Modal>
    </div>
  );
};

export default MainPage;
