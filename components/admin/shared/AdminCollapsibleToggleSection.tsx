'use client';

import type { ReactNode } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import IconButton from '@mui/material/IconButton';
import CategoryToggleSwitch from '@/components/admin/shared/CategoryToggleSwitch';
import { grayColors } from '@/lib/theme';

type AdminCollapsibleToggleSectionProps = {
  title: string;
  enabled: boolean;
  expanded: boolean;
  onEnabledChange: (enabled: boolean) => void;
  onExpandedChange: (expanded: boolean) => void;
  children?: ReactNode;
};

export default function AdminCollapsibleToggleSection({
  title,
  enabled,
  expanded,
  onEnabledChange,
  onExpandedChange,
  children,
}: AdminCollapsibleToggleSectionProps) {
  return (
    <div className="flex w-full flex-col gap-[18px]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">{title}</h2>
        <div className="flex shrink-0 items-center justify-end gap-2">
          <CategoryToggleSwitch checked={enabled} onChange={onEnabledChange} size="md" />
          <IconButton
            aria-label={expanded ? 'Collapse section' : 'Expand section'}
            onClick={() => onExpandedChange(!expanded)}
            sx={{
              p: '10.816px',
              color: grayColors[700],
              '&:hover': { bgcolor: '#F9FAFB' },
            }}
          >
            <KeyboardArrowDownOutlinedIcon
              sx={{
                fontSize: 16,
                transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease',
              }}
            />
          </IconButton>
        </div>
      </div>

      {expanded ? children : null}
    </div>
  );
}
