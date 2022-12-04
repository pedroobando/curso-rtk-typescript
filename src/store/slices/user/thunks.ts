import { createAsyncThunk } from '@reduxjs/toolkit';
import { jsonApi } from '../../../apis';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await jsonApi.get('/users');
  return response.data;
});
