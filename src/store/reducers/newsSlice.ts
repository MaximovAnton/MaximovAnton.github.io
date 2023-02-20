import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import {NewsState} from '@/types/types'

const initialState: NewsState = {
  data: [],
  status: '',
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async (page: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  const data = await response.json();
  return data;
});

export const deleteNews = createAsyncThunk('news/deleteNews', async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Failed to delete news.');
  }
  return id;
});

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = '';
        state.data.push(...action.payload);
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.status = '';
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const selectNews = (state: RootState) => state.news;

export default newsSlice.reducer;
