'use client';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import VerifiedIcon from '@mui/icons-material/Verified';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import type { FavorProvider } from '@/lib/admin/mockFavorDetailData';

type FavorProviderProfileProps = {
  provider: FavorProvider;
};

export default function FavorProviderProfile({ provider }: FavorProviderProfileProps) {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <div className="relative flex items-center gap-3">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            provider.verified ? (
              <VerifiedIcon sx={{ fontSize: 16, color: '#2E90FA', bgcolor: '#FFFFFF', borderRadius: '50%' }} />
            ) : null
          }
        >
          <Avatar
            src={provider.avatarSrc}
            alt={provider.name}
            sx={{
              width: 48,
              height: 48,
              border: '0.75px solid rgba(0,0,0,0.08)',
            }}
          />
        </Badge>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-base font-semibold leading-6 text-[#344054]">{provider.name}</p>
            {provider.isPro ? (
              <StatusBadge label="Pro" bg="#F9F5FF" border="#E9D7FE" text="#6941C6" />
            ) : null}
          </div>
          <p className="text-base font-normal leading-6 text-[#475467]">{provider.email}</p>
        </div>
      </div>
    </div>
  );
}
