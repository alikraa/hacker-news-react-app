import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsSlice from './news-slice.ts';
import currentNewsSlice from './current-news-slice.ts';

const rootReducer = combineReducers({
  newsIds: newsSlice,
  currentNews: currentNewsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
