import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import api from '@/lib/axios';
import { showNotification } from '@/lib/store/slices/notificationSlice';
import type { User } from '@/lib/store/slices/userSlice';

export type LoginPayload = {
  email: string;
  password: string;
};

export type Admin = {
  id: number;
  email: string;
  fullName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type LoginResponse = {
  success: boolean;
  status: number;
  message: string;
  data: {
    token: string;
    admin: Admin;
  };
};

export type LoginResult = {
  token: string;
  user: User;
};

function mapAdminToUser(admin: Admin): User {
  return {
    id: String(admin.id),
    email: admin.email,
    name: admin.fullName,
    role: 'admin',
  };
}

export const loginAdmin = createAsyncThunk<LoginResult, LoginPayload, { rejectValue: string }>(
  'auth/loginAdmin',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post<LoginResponse>('/admin/auth/login', payload);

      if (!data.success) {
        const message = data.message || 'Login failed';
        dispatch(showNotification({ message, severity: 'error' }));
        return rejectWithValue(message);
      }

      const { token, admin } = data.data;

      return {
        token,
        user: mapAdminToUser(admin),
      };
    } catch (error) {
      if (isAxiosError(error)) {
        const message = error.response?.data?.message;
        return rejectWithValue(
          typeof message === 'string' && message.trim() ? message : 'Login failed'
        );
      }

      return rejectWithValue('Unable to connect. Please try again.');
    }
  }
);
