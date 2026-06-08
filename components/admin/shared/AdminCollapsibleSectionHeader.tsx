'use client';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import IconButton from '@mui/material/IconButton';
import { grayColors } from '@/lib/theme';

type AdminCollapsibleSectionHeaderProps = {
  title: string;
  expanded: boolean;
  onToggleExpanded: () => void;
  onAdd?: () => void;
  addLabel?: string;
};

export default function AdminCollapsibleSectionHeader({
  title,
  expanded,
  onToggleExpanded,
  onAdd,
  addLabel = 'Add item',
}: AdminCollapsibleSectionHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <h2 className="text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">{title}</h2>
      <div className="flex shrink-0 items-center">
        {onAdd ? (
          <IconButton
            aria-label={addLabel}
            onClick={onAdd}
            sx={{
              p: '10.816px',
              color: grayColors[700],
              '&:hover': { bgcolor: '#F9FAFB' },
            }}
          >
            <AddOutlinedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        ) : null}
        <IconButton
          aria-label={expanded ? 'Collapse section' : 'Expand section'}
          onClick={onToggleExpanded}
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
  );
}
