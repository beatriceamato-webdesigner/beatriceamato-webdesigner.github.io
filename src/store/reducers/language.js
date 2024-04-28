import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils/globals';

export const language = createSlice({
  name: 'language',
  initialState: {
    locale: getLocalStorage('lang') || 'en'
  },
  reducers: {
    setLanguageLocale: (state, action) => {
      state.locale = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setLanguageLocale } = language.actions;

export default language.reducer;
