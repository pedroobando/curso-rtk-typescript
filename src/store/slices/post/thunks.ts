import { createAsyncThunk } from '@reduxjs/toolkit';
import { jsonApi } from '../../../apis';
import { IPOST } from '../../../interfaces';

const POST_URL = '/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await jsonApi.get(POST_URL);
    return [...response.data];
  } catch (err: any) {
    return err.message;
  }
});

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost: { title: string; body: string; userId: string }) => {
    try {
      const response = await jsonApi.post(POST_URL, initialPost);
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);
