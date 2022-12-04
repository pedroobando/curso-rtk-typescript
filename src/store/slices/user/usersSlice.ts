import { createSlice } from '@reduxjs/toolkit';
import { IUSER } from '../../../interfaces';
import { RootState } from '../../store';
import { fetchUsers } from './thunks';

const initialState: IUSER[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state: RootState) => state.users;
