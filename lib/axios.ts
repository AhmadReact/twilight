import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';
import type { AppDispatch, RootState } from '@/lib/store';
import { showNotification } from '@/lib/store/slices/notificationSlice';

export type ApiErrorBody = {
  success?: boolean;
  status?: number;
  message?: string;
};

declare module 'axios' {
  export interface AxiosRequestConfig {
    skipErrorNotification?: boolean;
  }
}

let getStore: () => { getState: () => RootState; dispatch: AppDispatch };

export function injectStore(store: { getState: () => RootState; dispatch: AppDispatch }) {
  getStore = () => store;
}

function getErrorMessage(error: AxiosError<ApiErrorBody>): string {
  const message = error.response?.data?.message;

  if (typeof message === 'string' && message.trim()) {
    return message;
  }

  if (!error.response) {
    return 'Unable to connect. Please try again.';
  }

  return 'Something went wrong. Please try again.';
}

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  if (!getStore) {
    return config;
  }

  const { token } = getStore().getState().user;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorBody>) => {
    if (!error.config?.skipErrorNotification && getStore) {
      getStore().dispatch(
        showNotification({
          message: getErrorMessage(error),
          severity: 'error',
        }),
      );
    }

    return Promise.reject(error);
  },
);

export type AxiosBaseQueryArgs = {
  url: string;
  method?: AxiosRequestConfig['method'];
  data?: unknown;
  params?: AxiosRequestConfig['params'];
  skipErrorNotification?: boolean;
};

export type AxiosBaseQueryError = {
  status?: number;
  data?: unknown;
  message?: string;
};

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
  async ({ url, method = 'GET', data, params, skipErrorNotification }) => {
    try {
      const result = await api({ url, method, data, params, skipErrorNotification });
      return { data: result.data };
    } catch (error) {
      const err = error as AxiosError<ApiErrorBody>;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
          message: err.response?.data?.message ?? err.message,
        },
      };
    }
  };

export default api;
