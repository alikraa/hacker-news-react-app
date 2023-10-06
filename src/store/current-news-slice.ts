import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const currentNews = createSlice({
  name: 'currentNews',
  initialState: {
    currentNews: 0,
  },
  reducers: {
    addCurrentNews(state, action: PayloadAction<number>) {
      state.currentNews = action.payload;
    },
  },
});

export default currentNews.reducer;
export const { addCurrentNews } = currentNews.actions;
