import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type NotificationSeverity = 'error' | 'success' | 'info' | 'warning';

export type NotificationState = {
  open: boolean;
  message: string;
  severity: NotificationSeverity;
};

const initialState: NotificationState = {
  open: false,
  message: '',
  severity: 'error',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(
      state,
      action: PayloadAction<{ message: string; severity?: NotificationSeverity }>,
    ) {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity ?? 'error';
    },
    hideNotification(state) {
      state.open = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

type NotificationRootState = { notification: NotificationState };

export const selectNotification = (state: NotificationRootState) => state.notification;
