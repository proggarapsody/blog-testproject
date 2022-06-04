import React, { useEffect } from 'react';

const PostsContext = React.createContext(null);
// custom hook which help to call context in future
const usePosts = () => React.useContext(PostsContext);
// custom component to make fetch and  provide post context
const PostsProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  // get posts from json placeholder only first render
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
