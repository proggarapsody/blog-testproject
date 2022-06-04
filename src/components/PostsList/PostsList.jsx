import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import styles from './posts-list.module.scss';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      ).then((res) => res.json());
      setPosts(data);
    }
    fetchData();
  }, []);
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
