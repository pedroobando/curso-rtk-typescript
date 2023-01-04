import { PostsList } from './features';
// import { AddPostForm, EditPostForm } from './features/posts';

// import PostsList from "./features/posts/PostsList";
// import AddPostForm from "./features/posts/AddPostForm";
// import SinglePostPage from './features/posts/SinglePostPage';

import { SinglePostPage } from './features/posts/SinglePostPage';

import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { AddPostForm } from './features/posts/AddPostForm';
import { EditPostForm } from './features/posts/EditPostForm';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
};
