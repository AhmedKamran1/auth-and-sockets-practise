import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDetails } from '@/services';

export const getUser = createAsyncThunk(
  'user/login',
  async (arg, { rejectWithValue }) => {
    try {
      const res = await getUserDetails();
      return ({ id, email, name, role, avatar, location, mapSlug } = res.data);
    } catch (e) {
      return rejectWithValue(e.response?.data?.message);
    }
  }
);
