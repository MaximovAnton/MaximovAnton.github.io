import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageState } from '../../types/types';

const initialState: LanguageState = {
  language: 'uk',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
