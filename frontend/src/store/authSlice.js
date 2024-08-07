import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setAuthTokens: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    clearAuthTokens: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthTokens, clearAuthTokens } = authSlice.actions;
export default authSlice.reducer;