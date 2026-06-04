import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UserRole = 'super_admin' | 'admin';

export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
};

export type UserState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      if (action.payload) {
        state.isLoading = false;
      }
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      state.isLoading = false;
    },
    updateUser(state, action: PayloadAction<Partial<User>>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { setLoading, setError, setUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

type UserRootState = { user: UserState };

export const selectUserState = (state: UserRootState) => state.user;
export const selectCurrentUser = (state: UserRootState) => state.user.user;
export const selectIsAuthenticated = (state: UserRootState) => state.user.isAuthenticated;
export const selectUserLoading = (state: UserRootState) => state.user.isLoading;
export const selectUserError = (state: UserRootState) => state.user.error;
