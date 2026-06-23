'use client';

import { useState, type MouseEvent } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import type { AdminUser } from '@/app/admin/users/store/userAPI';
import {
  useBlockUserMutation,
  useClearDeviceIdMutation,
  useUnblockUserMutation,
} from '@/app/admin/users/store/userAPI';
import SendUserMessageDialog from '@/components/admin/users/SendUserMessageDialog';
import { useAppDispatch } from '@/lib/store/hooks';
import { showNotification } from '@/lib/store/slices/notificationSlice';
import { grayColors } from '@/lib/theme';

type UserRowActionsMenuProps = {
  user: AdminUser;
};

const menuPaperSx = {
  mt: 0.5,
  minWidth: 200,
  borderRadius: '12px',
  border: '1px solid #EAECF0',
  boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
};

const menuItemSx = {
  px: '14px',
  py: '10px',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#344054',
  '&:hover': {
    bgcolor: '#F9FAFB',
  },
};

const destructiveMenuItemSx = {
  ...menuItemSx,
  color: '#B42318',
  '&:hover': {
    bgcolor: '#FEF3F2',
  },
};

export default function UserRowActionsMenu({ user }: UserRowActionsMenuProps) {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);

  const [blockUser, { isLoading: isBlocking }] = useBlockUserMutation();
  const [unblockUser, { isLoading: isUnblocking }] = useUnblockUserMutation();
  const [clearDeviceId, { isLoading: isClearingDevice }] = useClearDeviceIdMutation();

  const isOpen = Boolean(anchorEl);
  const isBlocked = user.status_key === 'blocked';
  const isActionLoading = isBlocking || isUnblocking || isClearingDevice;

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBlock = async () => {
    handleClose();

    try {
      const response = await blockUser(user.id).unwrap();
      dispatch(
        showNotification({
          message: response.message || 'User blocked successfully',
          severity: 'success',
        }),
      );
    } catch {
      // Error notification is handled by the axios interceptor.
    }
  };

  const handleUnblock = async () => {
    handleClose();

    try {
      const response = await unblockUser(user.id).unwrap();
      dispatch(
        showNotification({
          message: response.message || 'User unblocked successfully',
          severity: 'success',
        }),
      );
    } catch {
      // Error notification is handled by the axios interceptor.
    }
  };

  const handleClearDeviceId = async () => {
    handleClose();

    try {
      const response = await clearDeviceId(user.id).unwrap();
      dispatch(
        showNotification({
          message: response.message || 'Device ID cleared successfully',
          severity: 'success',
        }),
      );
    } catch {
      // Error notification is handled by the axios interceptor.
    }
  };

  const handleSendMessage = () => {
    handleClose();
    setMessageDialogOpen(true);
  };

  return (
    <>
      <IconButton
        aria-label="Row actions"
        size="small"
        onClick={handleOpen}
        disabled={isActionLoading}
        sx={{ color: grayColors[700] }}
      >
        <MoreVertOutlinedIcon fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        onClick={(event) => event.stopPropagation()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: { sx: menuPaperSx },
          list: { sx: { py: '6px' } },
        }}
      >
        <MenuItem onClick={handleBlock} disabled={isBlocked || isActionLoading} sx={destructiveMenuItemSx}>
          <ListItemText primary="Block user" />
        </MenuItem>
        <MenuItem onClick={handleUnblock} disabled={!isBlocked || isActionLoading} sx={menuItemSx}>
          <ListItemText primary="Unblock user" />
        </MenuItem>
        <MenuItem onClick={handleSendMessage} disabled={isActionLoading} sx={menuItemSx}>
          <ListItemText primary="Send email/notification" />
        </MenuItem>
        <MenuItem onClick={handleClearDeviceId} disabled={isActionLoading} sx={menuItemSx}>
          <ListItemText primary="Clear Device id" />
        </MenuItem>
      </Menu>

      <SendUserMessageDialog
        open={messageDialogOpen}
        onClose={() => setMessageDialogOpen(false)}
        userId={user.id}
        userName={user.full_name}
      />
    </>
  );
}
