'use client';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import VerifiedIcon from '@mui/icons-material/Verified';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import type { DisputeParticipant } from '@/lib/admin/disputeDetailTypes';

type DisputeParticipantChipProps = {
  participant: DisputeParticipant;
};

export default function DisputeParticipantChip({ participant }: DisputeParticipantChipProps) {
  const { name, role, avatarSrc, avatarBg, initials, verified, isDisputeCreator } =
    participant;

  return (
    <div className="flex items-center gap-3">
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
            fontSize: initials ? 16 : undefined,
            fontWeight: 600,
            color: '#475467',
            border: '0.75px solid rgba(0,0,0,0.08)',
          }}
        >
          {initials}
        </Avatar>
      </Badge>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-base font-semibold leading-6 text-[#344054]">{name}</p>
          {isDisputeCreator ? (
            <StatusBadge
              label="Dispute Creator"
              bg="#F9F5FF"
              border="#E9D7FE"
              text="#6941C6"
              className="px-1.5 py-0.5 text-[10px] leading-[15px]"
            />
          ) : null}
        </div>
        <p className="text-base font-normal leading-6 text-[#475467]">{role}</p>
      </div>
    </div>
  );
}
