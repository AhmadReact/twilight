'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import {
  useBlockUserMutation,
  useUnblockUserMutation,
} from '@/app/admin/users/store/userAPI';
import SendUserMessageDialog from '@/components/admin/users/SendUserMessageDialog';
import {
  destructiveOutlineButtonSx,
  outlineButtonSx,
  primaryButtonSx,
} from '@/lib/admin/adminButtonStyles';
import { useAppDispatch } from '@/lib/store/hooks';
import { showNotification } from '@/lib/store/slices/notificationSlice';

type UserDetailActionsBarProps = {
  userId: string | number;
  userName: string;
  memberSince: string;
  isBlocked: boolean;
};

export default function UserDetailActionsBar({
  userId,
  userName,
  memberSince,
  isBlocked,
}: UserDetailActionsBarProps) {
  const dispatch = useAppDispatch();
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);

  const [blockUser, { isLoading: isBlocking }] = useBlockUserMutation();
  const [unblockUser, { isLoading: isUnblocking }] = useUnblockUserMutation();

  const isActionLoading = isBlocking || isUnblocking;
  const numericUserId = Number(userId);

  const handleBlockToggle = async () => {
    try {
      const response = isBlocked
        ? await unblockUser(userId).unwrap()
        : await blockUser(userId).unwrap();

      dispatch(
        showNotification({
          message:
            response.message ||
            (isBlocked ? 'User unblocked successfully' : 'User blocked successfully'),
          severity: 'success',
        }),
      );
    } catch {
      // Error notification is handled by the axios interceptor.
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <Button
            disableElevation
            startIcon={<MessageOutlinedIcon sx={{ fontSize: 20 }} />}
            sx={primaryButtonSx}
            onClick={() => setMessageDialogOpen(true)}
            disabled={isActionLoading}
          >
            Send Message
          </Button>
          <Button
            disableElevation
            startIcon={
              isActionLoading ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                <BlockOutlinedIcon sx={{ fontSize: 20 }} />
              )
            }
            sx={isBlocked ? outlineButtonSx : destructiveOutlineButtonSx}
            onClick={handleBlockToggle}
            disabled={isActionLoading}
          >
            {isBlocked ? 'Unblock User' : 'Block User'}
          </Button>
        </div>
        <div className="text-left text-base leading-6 text-[#475467] lg:text-right">
          <p>User ID: {userId}</p>
          <p>Member Since {memberSince}</p>
        </div>
      </div>

      <SendUserMessageDialog
        open={messageDialogOpen}
        onClose={() => setMessageDialogOpen(false)}
        userId={numericUserId}
        userName={userName}
      />
    </>
  );
}
