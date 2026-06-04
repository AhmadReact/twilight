'use client';

import Avatar from '@mui/material/Avatar';
import { grayColors } from '@/lib/theme';

type AvatarStackCellProps = {
  avatars: string[];
  extraCount: number;
  maxVisible?: number;
};

export default function AvatarStackCell({
  avatars,
  extraCount,
  maxVisible = 5,
}: AvatarStackCellProps) {
  const visible = avatars.slice(0, maxVisible);

  return (
    <div className="flex items-center justify-center">
      {visible.map((src, index) => (
        <Avatar
          key={`${src}-${index}`}
          src={src}
          alt=""
          sx={{
            width: 24,
            height: 24,
            border: '2px solid #FFFFFF',
            ml: index === 0 ? 0 : '-6px',
            zIndex: maxVisible - index,
          }}
        />
      ))}
      <Avatar
        sx={{
          width: 24,
          height: 24,
          ml: visible.length > 0 ? '-6px' : 0,
          bgcolor: '#F2F4F7',
          border: '2px solid #FFFFFF',
          fontSize: 11,
          fontWeight: 600,
          color: grayColors[600],
          zIndex: 0,
        }}
      >
        +{extraCount}
      </Avatar>
    </div>
  );
}
