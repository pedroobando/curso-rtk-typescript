import { createSlice } from '@reduxjs/toolkit';
import { IUSER } from '../../../interfaces';
import { RootState } from '../../store';

const initialState: IUSER[] = [
  { id: '0', name: 'Dude Lebowski' },
  { id: '1', name: 'Neil Young' },
  { id: '2', name: 'Dave Gray' },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;
