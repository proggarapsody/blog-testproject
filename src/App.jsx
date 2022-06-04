import { Route, Routes } from 'react-router-dom';
import { PostsProvider } from './components/PostsProvider';
import MainPage from './pages/MainPage/MainPage';
import PostPage from './pages/PostPage/PostPage';

function App() {
  return (
    <div className="app">
      <PostsProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="post/:id" element={<PostPage />} />
        </Routes>
      </PostsProvider>
    </div>
  );
}

export default App;
