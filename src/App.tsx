import { PostsList } from './features';
import { AddPostForm } from './features/posts/AddPostForm';

export const App = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
};
