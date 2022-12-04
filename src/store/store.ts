import { configureStore } from '@reduxjs/toolkit';
import { postsSlice, usersSlice } from './slices';

// import { todosApi } from './apis';
// import { counterSlice } from './slices/counter';
// import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
    // counter: counterSlice.reducer,
    // pokemons: pokemonSlice.reducer,
    // [todosApi.reducerPath]: todosApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
