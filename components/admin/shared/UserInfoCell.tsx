'use client';

import Avatar from '@mui/material/Avatar';

type UserInfoCellProps = {
  name: string;
  role?: string;
  subtitle?: string;
  avatarSrc?: string;
  avatarBg?: string;
  initials?: string;
};

export default function UserInfoCell({
  name,
  role,
  subtitle,
  avatarSrc,
  avatarBg,
  initials,
}: UserInfoCellProps) {
  const secondaryLine = subtitle ?? role;

  return (
    <div className="flex min-w-[200px] items-center gap-3">
      <Avatar
        src={avatarSrc}
        alt={name}
        sx={{
          width: 36,
          height: 36,
          bgcolor: avatarBg ?? '#F2F4F7',
          fontSize: initials ? 14 : undefined,
          fontWeight: initials ? 600 : undefined,
          color: '#475467',
          border: '1px solid rgba(0,0,0,0.08)',
          flexShrink: 0,
        }}
      >
        {initials}
      </Avatar>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium leading-5 text-[#101828]">{name}</p>
        {secondaryLine ? (
          <p className="truncate text-sm font-normal leading-[18px] text-[#475467]">
            {secondaryLine}
          </p>
        ) : null}
      </div>
    </div>
  );
}
