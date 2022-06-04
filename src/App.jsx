import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import PostPage from './pages/PostPage/PostPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
