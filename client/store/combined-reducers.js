import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';

export const combinedReducer = combineReducers({
  user: userSlice.reducer,
});
