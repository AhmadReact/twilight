'use client';

import Button from '@mui/material/Button';
import { brandColors } from '@/lib/theme';

type SectionHeaderLinkProps = {
  title: string;
  actionLabel?: string;
  onActionClick?: () => void;
};

export default function SectionHeaderLink({
  title,
  actionLabel = 'See all',
  onActionClick,
}: SectionHeaderLinkProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="truncate text-base font-semibold leading-6 text-[#344054]">{title}</h2>
      <Button
        disableElevation
        onClick={onActionClick}
        sx={{
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
        {actionLabel}
      </Button>
    </div>
  );
}
