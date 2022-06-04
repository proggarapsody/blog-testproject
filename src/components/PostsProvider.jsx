import React, { useEffect } from 'react';

const PostsContext = React.createContext(null);

const usePosts = () => React.useContext(PostsContext);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([]);

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
    <PostsContext.Provider value={[posts, setPosts]}>
      {children}
    </PostsContext.Provider>
  );
};
export { PostsProvider, usePosts };
