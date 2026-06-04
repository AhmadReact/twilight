'use client';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import type { CustomFavorParticipant } from '@/lib/admin/mockCustomFavorDetailData';
import { brandColors, grayColors } from '@/lib/theme';

const roleBadgeStyles: Record<string, { bg: string; border: string; text: string }> = {
  'Team Lead': { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' },
  'Pro Seller': { bg: 'transparent', border: '#475467', text: '#344054' },
  Worker: { bg: 'transparent', border: '#475467', text: '#344054' },
};

type CustomFavorParticipantRowProps = {
  participant: CustomFavorParticipant;
  showProposalLink?: boolean;
};

export default function CustomFavorParticipantRow({
  participant,
  showProposalLink = false,
}: CustomFavorParticipantRowProps) {
  const badgeStyle = roleBadgeStyles[participant.role] ?? roleBadgeStyles['Pro Seller'];
  const isOutlinedRole = participant.role !== 'Team Lead';

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex min-w-0 gap-3">
        <Avatar
          src={participant.avatarSrc}
          alt={participant.name}
          sx={{
            width: 40,
            height: 40,
            bgcolor: participant.avatarBg ?? '#F2F4F7',
            border: '1px solid rgba(0,0,0,0.08)',
            flexShrink: 0,
          }}
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-5 text-[#344054]">{participant.name}</p>
          <p className="text-sm font-normal leading-5 text-[#475467]">{participant.email}</p>
          <div className="mt-1 flex items-start gap-1 text-xs leading-4 text-[#475467]">
            <PlaceOutlinedIcon sx={{ fontSize: 14, mt: '1px', color: grayColors[500] }} />
            <span className="break-words">{participant.address}</span>
          </div>
          {showProposalLink ? (
            <Button
              disableElevation
              sx={{
                mt: 1,
                minWidth: 0,
                p: 0,
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '20px',
                color: brandColors[700],
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
              }}
            >
              View Proposal
            </Button>
          ) : null}
        </div>
      </div>
      <StatusBadge
        label={participant.role}
        bg={badgeStyle.bg}
        border={badgeStyle.border}
        text={badgeStyle.text}
        className={isOutlinedRole ? 'border-[1.5px]' : undefined}
      />
    </div>
  );
}
