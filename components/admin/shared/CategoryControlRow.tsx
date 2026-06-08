'use client';

import IconButton from '@mui/material/IconButton';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CategoryToggleSwitch from '@/components/admin/shared/CategoryToggleSwitch';
import { grayColors } from '@/lib/theme';

type CategoryControlRowProps = {
  label: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  toggleSize?: 'sm' | 'md';
  labelClassName?: string;
  paddingClassName?: string;
  showExpand?: boolean;
  expanded?: boolean;
  onExpandToggle?: () => void;
};

export default function CategoryControlRow({
  label,
  enabled,
  onToggle,
  toggleSize = 'md',
  labelClassName = 'text-base font-semibold leading-6 text-[#101828]',
  paddingClassName = '',
  showExpand = false,
  expanded = false,
  onExpandToggle,
}: CategoryControlRowProps) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${paddingClassName}`}
    >
      <p className={`min-w-0 ${labelClassName}`}>{label}</p>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <CategoryToggleSwitch checked={enabled} onChange={onToggle} size={toggleSize} />

        <IconButton
          aria-label={`Edit ${label}`}
          size="small"
          sx={{
            p: toggleSize === 'sm' ? 1 : '10px',
            color: grayColors[700],
            '&:hover': { bgcolor: '#F9FAFB' },
          }}
        >
          <EditOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <IconButton
          aria-label={`Delete ${label}`}
          size="small"
          sx={{
            p: toggleSize === 'sm' ? 1 : '10px',
            color: '#B42318',
            '&:hover': { bgcolor: '#FEF3F2' },
          }}
        >
          <DeleteOutlineOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {showExpand ? (
          <IconButton
            aria-label={expanded ? `Collapse ${label}` : `Expand ${label}`}
            size="small"
            onClick={onExpandToggle}
            sx={{
              p: toggleSize === 'sm' ? '9px' : '10px',
              color: grayColors[700],
              '&:hover': { bgcolor: '#F9FAFB' },
            }}
          >
            {expanded ? (
              <ExpandMoreOutlinedIcon sx={{ fontSize: 20 }} />
            ) : (
              <ChevronRightOutlinedIcon sx={{ fontSize: 20 }} />
            )}
          </IconButton>
        ) : null}
      </div>
    </div>
  );
}
