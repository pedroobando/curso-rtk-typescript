import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { IPOST } from '../../../interfaces';
import { RootState } from '../../store';

const initialState: IPOST[] = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza.',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<IPOST>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    // reactionAdded(state, action) {
    //   const { postId, reaction } = action.payload;
    //   const existingPost = state.find((post) => post.id === postId);
    //   if (existingPost) {
    //     existingPost.reactions[reaction]++;
    //   }
    // },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded } = postsSlice.actions;

// export default postsSlice.reducer;
