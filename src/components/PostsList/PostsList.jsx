import React from 'react';

import Post from '../Post/Post';
import { usePosts } from '../PostsProvider';
import styles from './posts-list.module.scss';

const PostsList = () => {
  const [posts] = usePosts();

  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
