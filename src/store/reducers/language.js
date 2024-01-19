import { createSlice } from '@reduxjs/toolkit';

export const language = createSlice({
  name: 'language',
  initialState: {
    locale: 'en'
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
