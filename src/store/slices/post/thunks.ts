import { createAsyncThunk } from '@reduxjs/toolkit';
import { jsonApi } from '../../../apis';
// import { IPOST } from '../../../interfaces';

const POST_URL = '/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await jsonApi.get(POST_URL);
  // throw new Error('error provocado');
  return [...response.data];
});

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost: { title: string; body: string; userId: string }) => {
    const response = await jsonApi.post(POST_URL, initialPost);
    return response.data;
  }
);
