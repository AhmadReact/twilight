'use client';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { notificationAlertSx } from '@/lib/theme';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import {
  hideNotification,
  selectNotification,
} from '@/lib/store/slices/notificationSlice';

export default function NotificationProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { open, message, severity } = useAppSelector(selectNotification);

  const handleClose = () => {
    dispatch(hideNotification());
  };

  return (
    <>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity={severity}
          onClose={handleClose}
          variant="filled"
          sx={notificationAlertSx}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
