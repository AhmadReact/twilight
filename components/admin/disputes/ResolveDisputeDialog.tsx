'use client';

import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ResolveDisputePanel from '@/components/admin/disputes/ResolveDisputePanel';
import type { DisputeResolutionType, ResolveDisputeContext } from '@/lib/admin/disputeResolutionTypes';

type ResolveDisputeDialogProps = {
  open: boolean;
  context: ResolveDisputeContext;
  onClose: () => void;
  onResolve?: (resolution: DisputeResolutionType) => void;
};

export default function ResolveDisputeDialog({
  open,
  context,
  onClose,
  onResolve,
}: ResolveDisputeDialogProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isSmall}
      maxWidth={false}
      fullWidth={false}
      slotProps={{
        paper: {
          sx: {
            m: isSmall ? 0 : 2,
            width: isSmall ? '100%' : '805px',
            maxWidth: isSmall ? '100%' : 'min(805px, calc(100vw - 32px))',
            borderRadius: isSmall ? 0 : '23px',
            overflow: 'hidden',
            bgcolor: '#FFFFFF',
            boxShadow:
              '0px 28px 30.5px rgba(0, 0, 0, 0.1), 0px 112px 56px rgba(0, 0, 0, 0.09), 0px 252px 75.5px rgba(0, 0, 0, 0.05)',
          },
        },
      }}
    >
      <ResolveDisputePanel
        context={context}
        onCancel={onClose}
        onResolve={(resolution) => {
          onResolve?.(resolution);
          onClose();
        }}
      />
    </Dialog>
  );
}
