import React, { useEffect, useState } from 'react';
import PostsList from '../../components/PostsList/PostsList';
import styles from './mainpage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageHeader}>
        <h1 className={styles.mainPageTitle}>Блог</h1>
        <button className={styles.mainPageAddBtn}>+Добавить</button>
      </div>

      <PostsList />
    </div>
  );
};

export default MainPage;
