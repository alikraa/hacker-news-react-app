import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchNewsIds = createAsyncThunk<
  number[],
  string,
  { rejectValue: string | unknown }
>('newsIds/fetchNewsIds', async (url, { rejectWithValue }) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw rejectWithValue(`request error: ${response.status}`);
    } else {
      const json = await response.json();
      return json;
    }
  } catch (error: unknown) {
    return rejectWithValue(error);
  }
});

export interface NewsIds {
  data: number[] | null;
  status: string;
  error: string | unknown;
}

const initialState: NewsIds = {
  data: null,
  status: '',
  error: null,
};

const news = createSlice({
  name: 'newsIds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsIds.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchNewsIds.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      })
      .addCase(fetchNewsIds.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default news.reducer;
export { fetchNewsIds };
