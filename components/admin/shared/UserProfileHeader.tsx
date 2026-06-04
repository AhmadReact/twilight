'use client';

import type { ReactNode } from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

type UserProfileHeaderProps = {
  name: string;
  email: string;
  phone: string;
  avatarSrc?: string;
  avatarBg?: string;
  initials?: string;
  verified?: boolean;
  trailing?: ReactNode;
};

export default function UserProfileHeader({
  name,
  email,
  phone,
  avatarSrc,
  avatarBg,
  initials,
  verified = false,
  trailing,
}: UserProfileHeaderProps) {
  return (
    <div className="flex flex-col gap-5 xl:flex-row xl:flex-wrap xl:items-start xl:justify-between">
      <div className="flex min-w-0 flex-1 flex-col gap-5 sm:flex-row sm:items-center">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            verified ? (
              <VerifiedIcon
                sx={{
                  fontSize: { xs: 24, sm: 32 },
                  color: '#2E90FA',
                  bgcolor: '#FFFFFF',
                  borderRadius: '50%',
                }}
              />
            ) : null
          }
        >
          <Avatar
            src={avatarSrc}
            alt={name}
            sx={{
              width: { xs: 80, sm: 104 },
              height: { xs: 80, sm: 104 },
              bgcolor: avatarBg ?? '#F2F4F7',
              fontSize: initials ? 28 : undefined,
              fontWeight: 600,
              color: '#475467',
              border: '1.5px solid rgba(0,0,0,0.08)',
            }}
          >
            {initials}
          </Avatar>
        </Badge>
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
            {name}
          </h1>
          <p className="text-base font-normal leading-6 text-[#475467]">{email}</p>
          <div className="mt-1 flex items-center gap-0.5">
            <PhoneOutlinedIcon sx={{ fontSize: 20, color: '#667085' }} />
            <span className="text-base font-normal leading-6 text-[#475467]">{phone}</span>
          </div>
        </div>
      </div>
      {trailing ? (
        <div className="flex flex-wrap items-center gap-3">{trailing}</div>
      ) : null}
    </div>
  );
}
