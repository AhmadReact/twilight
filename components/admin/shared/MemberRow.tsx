'use client';

import Avatar from '@mui/material/Avatar';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import type { TeamMember } from '@/lib/admin/mockTeamDetailData';
import { grayColors } from '@/lib/theme';

const roleBadgeStyles = {
  'Team Lead': { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' },
  Worker: { bg: 'transparent', border: '#475467', text: '#344054' },
} as const;

type MemberRowProps = {
  member: TeamMember;
};

export default function MemberRow({ member }: MemberRowProps) {
  const badgeStyle = roleBadgeStyles[member.role];
  const isWorker = member.role === 'Worker';

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex min-w-0 gap-3">
        <Avatar
          src={member.avatarSrc}
          alt={member.name}
          sx={{
            width: 40,
            height: 40,
            bgcolor: member.avatarBg ?? '#F2F4F7',
            border: '1px solid rgba(0,0,0,0.08)',
            flexShrink: 0,
          }}
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-5 text-[#344054]">{member.name}</p>
          <p className="text-sm font-normal leading-5 text-[#475467]">{member.email}</p>
          <div className="mt-1 flex items-start gap-1 text-xs leading-4 text-[#475467]">
            <PlaceOutlinedIcon sx={{ fontSize: 14, mt: '1px', color: grayColors[500] }} />
            <span className="break-words">{member.address}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 sm:items-end sm:self-stretch sm:justify-between">
        <StatusBadge
          label={member.role}
          bg={badgeStyle.bg}
          border={badgeStyle.border}
          text={badgeStyle.text}
          className={isWorker ? 'border-[1.5px]' : undefined}
        />
        <p className="text-[10px] leading-[15px] text-[#616161]">
          Device ID: {member.deviceId}
        </p>
      </div>
    </div>
  );
}
