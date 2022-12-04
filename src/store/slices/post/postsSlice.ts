import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

import { IPOST } from '../../../interfaces';
import { RootState } from '../../store';
import { addNewPost, fetchPosts } from './thunks';

export type StatusPostType = 'idle' | 'pending' | 'loading' | 'succeeded' | 'failed';

interface IPostState {
  posts: IPOST[];
  status: StatusPostType;
  error: null | string | undefined;
}

const initialState: IPostState = {
  posts: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// initialState.status;
// const initialState: IPOST[] = [
//   {
//     id: '1',
//     title: 'Learning Redux Toolkit',
//     content: "I've heard good things.",
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0,
//     },
//   },
//   {
//     id: '2',
//     title: 'Slices...',
//     content: 'The more I say slice, the more I want pizza.',
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0,
//     },
//   },
// ];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postAdded: {
    //   reducer(state, action: PayloadAction<IPOST>) {
    //     state.posts.push(action.payload);
    //   },
    //   prepare(title: string, content: string, userId: string) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         body: content,
    //         date: new Date().toISOString(),
    //         userId,
    //         reactions: {
    //           thumbsUp: 0,
    //           wow: 0,
    //           heart: 0,
    //           rocket: 0,
    //           coffee: 0,
    //         },
    //       },
    //     };
    //   },
    // },
    reactionAdded(state, action: PayloadAction<{ postId: string; reaction: string }>) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        // str as keyof typeof obj
        existingPost.reactions[reaction as keyof typeof existingPost.reactions]++;
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post: IPOST) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        // Add any fetched posts to the array
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // title, body: content, userId
      .addCase(addNewPost.fulfilled, (state, action) => {
        // (state, action: PayloadAction<{ title: string; body: string; userId: string }>) => {
        // Fix for API post IDs:
        // Creating sortedPosts & assigning the id
        // would be not be needed if the fake API
        // returned accurate new post IDs
        // const sortedPosts = state.posts.sort((a, b) => {
        //   if (a.id > b.id) return 1;
        //   if (a.id < b.id) return -1;
        //   return 0;
        // });
        // action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
        // End fix for fake API post IDs

        const { title, body, userId } = action.payload as { title: string; body: string; userId: string };
        const addNewPost = { title, body } as IPOST;
        addNewPost.userId = Number(userId);
        addNewPost.date = new Date().toISOString();
        addNewPost.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        // console.log(addNewPost);
        state.posts.push(addNewPost);
      });
  },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const getPostsStatus = (state: RootState) => state.posts.status;
export const getPostsError = (state: RootState) => state.posts.error;

export const { reactionAdded } = postsSlice.actions;

// export default postsSlice.reducer;
