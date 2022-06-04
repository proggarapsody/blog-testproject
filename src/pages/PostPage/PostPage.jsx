import React from 'react';
import { Link, useParams } from 'react-router-dom';
import EditPostForm from '../../components/PostForm/EditPostForm';
import { usePosts } from '../../components/PostsProvider';
import styles from './post-page.module.scss';

const PostPage = () => {
  // get param - :id from route
  const { id } = useParams();
  const [posts, setPosts] = usePosts();
  // find post in array of all posts with id equal to params
  // after this edit param
  const post = posts.find((el) => el.id.toString() === id.replace(':', ''));

  return (
    <div className={styles.postPage}>
      {post && (
        <>
          <Link className={styles.backBtn + ' primary-button'} to={'/'}>
            Назад
          </Link>
          <h3 className={styles.postPageTitle}>Запись {post.title}</h3>
          <EditPostForm post={post} posts={posts} setPosts={setPosts} />
        </>
      )}
    </div>
  );
};

export default PostPage;
