'use client';

import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import type { ChatThread } from '@/lib/admin/chatTypes';
import AdminChatPanel from '@/components/admin/shared/chat/AdminChatPanel';

type AdminChatDialogProps = {
  open: boolean;
  thread: ChatThread;
  onClose: () => void;
  onSend?: (message: string) => void;
};

export default function AdminChatDialog({
  open,
  thread,
  onClose,
  onSend,
}: AdminChatDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            m: fullScreen ? 0 : 2,
            maxHeight: fullScreen ? '100%' : 'min(90vh, 1012px)',
            height: fullScreen ? '100%' : 'min(90vh, 1012px)',
            borderRadius: fullScreen ? 0 : '14px',
            overflow: 'hidden',
            bgcolor: 'transparent',
            boxShadow: fullScreen
              ? 'none'
              : '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
          },
        },
      }}
    >
      <AdminChatPanel thread={thread} onClose={onClose} onSend={onSend} />
    </Dialog>
  );
}
