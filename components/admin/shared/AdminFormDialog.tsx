'use client';

import type { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type AdminFormDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: number | string;
};

export default function AdminFormDialog({
  open,
  onClose,
  title,
  children,
  maxWidth = 440,
}: AdminFormDialogProps) {
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
            borderRadius: isSmall ? 0 : '24px',
            overflow: 'hidden',
            bgcolor: '#FFFFFF',
            boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.2)',
          },
        },
      }}
    >
      <div className="flex w-full flex-col px-5 pb-5 pt-8 sm:px-7 sm:pb-5 sm:pt-9">
        <h2 className="text-center text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">
          {title}
        </h2>
        <div className="mt-4">{children}</div>
      </div>
    </Dialog>
  );
}
