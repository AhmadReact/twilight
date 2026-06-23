'use client';

import type { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type AdminPanelDialogProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: number | string;
};

export default function AdminPanelDialog({
  open,
  onClose,
  children,
  maxWidth = 430,
}: AdminPanelDialogProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isSmall}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            m: isSmall ? 0 : 2,
            width: isSmall ? '100%' : maxWidth,
            maxWidth: isSmall ? '100%' : `min(${maxWidth}px, calc(100vw - 32px))`,
            borderRadius: isSmall ? 0 : '23px',
            overflow: 'hidden',
            bgcolor: '#FFFFFF',
            boxShadow:
              '0px 28px 30.5px rgba(0, 0, 0, 0.1), 0px 112px 56px rgba(0, 0, 0, 0.09), 0px 252px 75.5px rgba(0, 0, 0, 0.05)',
          },
        },
      }}
    >
      <div className="flex w-full flex-col p-6 sm:p-8">{children}</div>
    </Dialog>
  );
}
