import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import newsReducer from './reducers/newsSlice';
import languageReducer from './reducers/languageSlice';
import * as reduxThunk from "redux-thunk/extend-redux";

const rootReducer = combineReducers({
  news: newsReducer,
  language: languageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>







