'use client';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import VerifiedIcon from '@mui/icons-material/Verified';
import StatusBadge from '@/components/admin/shared/StatusBadge';

type FavorPartyCardProps = {
  name: string;
  email?: string;
  subtitle?: string;
  avatarSrc?: string;
  avatarBg?: string;
  verified?: boolean;
  statusLabel: string;
  statusStyle: { bg: string; border: string; text: string };
};

export default function FavorPartyCard({
  name,
  email,
  subtitle,
  avatarSrc,
  avatarBg,
  verified = true,
  statusLabel,
  statusStyle,
}: FavorPartyCardProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2 sm:max-w-[50%]">
      <div className="flex items-start gap-3">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          verified ? (
            <VerifiedIcon
              sx={{ fontSize: 16, color: '#2E90FA', bgcolor: '#FFFFFF', borderRadius: '50%' }}
            />
          ) : null
        }
      >
        <Avatar
          src={avatarSrc}
          alt={name}
          sx={{
            width: 48,
            height: 48,
            bgcolor: avatarBg ?? '#F2F4F7',
            border: '0.75px solid rgba(0,0,0,0.08)',
            flexShrink: 0,
          }}
        />
      </Badge>
      <div className="min-w-0 pt-1">
        <p className="text-base font-semibold leading-6 text-[#344054]">{name}</p>
        <p className="text-base font-normal leading-6 text-[#475467]">{subtitle ?? email}</p>
      </div>
      </div>
      <StatusBadge
        label={statusLabel}
        bg={statusStyle.bg}
        border={statusStyle.border}
        text={statusStyle.text}
        className="self-start"
      />
    </div>
  );
}
