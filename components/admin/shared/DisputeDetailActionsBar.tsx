'use client';

import Button from '@mui/material/Button';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { outlineButtonSx, primaryButtonSx } from '@/lib/admin/adminButtonStyles';

type DisputeDetailActionsBarProps = {
  onViewChat?: () => void;
  onResolveDispute?: () => void;
};

export default function DisputeDetailActionsBar({
  onViewChat,
  onResolveDispute,
}: DisputeDetailActionsBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        disableElevation
        startIcon={<ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 20 }} />}
        sx={outlineButtonSx}
        onClick={onViewChat}
      >
        View Chat
      </Button>
      <Button disableElevation sx={primaryButtonSx} onClick={onResolveDispute}>
        Resolve Dispute
      </Button>
    </div>
  );
}
