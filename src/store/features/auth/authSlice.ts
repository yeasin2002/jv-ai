import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setAuthError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setAuthUser(state, action: PayloadAction<{ user: any; token: string } | null>) {
      if (action.payload) {
        state.user = action.payload.user;
        state.token = action.payload.token;
      } else {
        state.user = null;
        state.token = null;
      }
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { setAuthLoading, setAuthError, setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
