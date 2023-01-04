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

// id: post.id, title, body: content, userId, reactions: post.reactions

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (initialPost: { id: number; title: string; body: string; userId?: number; reactions: any }) => {
    const { id } = initialPost;
    try {
      const response = await jsonApi.post(`${POST_URL}/${id}`, initialPost);
      return response.data;
    } catch (err) {
      //return err.message;
      return initialPost; // only for testing Redux!
    }
  }
);

export const deletePost = createAsyncThunk('posts/deletePost', async (initialPost: { id: number }) => {
  const { id } = initialPost;
  try {
    const response = await jsonApi.delete(`${POST_URL}/${id}`);
    if (response?.status === 200) return initialPost;
    return `${response?.status}: ${response?.statusText}`;
  } catch (err: any) {
    return err.message;
  }
});
