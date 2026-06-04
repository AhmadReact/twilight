'use client';

import Button from '@mui/material/Button';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import {
  destructiveOutlineButtonSx,
  primaryButtonSx,
} from '@/lib/admin/adminButtonStyles';

type UserDetailActionsBarProps = {
  userId: string;
  memberSince: string;
};

export default function UserDetailActionsBar({
  userId,
  memberSince,
}: UserDetailActionsBarProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          disableElevation
          startIcon={<MessageOutlinedIcon sx={{ fontSize: 20 }} />}
          sx={primaryButtonSx}
        >
          Send Message
        </Button>
        <Button
          disableElevation
          startIcon={<BlockOutlinedIcon sx={{ fontSize: 20 }} />}
          sx={destructiveOutlineButtonSx}
        >
          Block User
        </Button>
      </div>
      <div className="text-left text-base leading-6 text-[#475467] lg:text-right">
        <p>User ID: {userId}</p>
        <p>Member Since {memberSince}</p>
      </div>
    </div>
  );
}
