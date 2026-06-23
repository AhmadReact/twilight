import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { userApi } from '@/app/admin/users/store/userAPI';
import { injectStore } from '@/lib/axios';
import notificationReducer from '@/lib/store/slices/notificationSlice';
import userReducer from '@/lib/store/slices/userSlice';
import storage from '@/lib/store/storage';

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['isLoading', 'error'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  notification: notificationReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware),
});

export const persistor = persistStore(store);

injectStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
