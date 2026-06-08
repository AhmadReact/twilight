'use client';

import Button from '@mui/material/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import IconButton from '@mui/material/IconButton';
import CategoryToggleSwitch from '@/components/admin/shared/CategoryToggleSwitch';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { grayColors } from '@/lib/theme';

type AdminEditableToggleRowProps = {
  label: string;
  enabled: boolean;
  expanded: boolean;
  onEnabledChange: (enabled: boolean) => void;
  onExpandedChange: (expanded: boolean) => void;
  onEdit?: () => void;
  showEdit?: boolean;
};

export default function AdminEditableToggleRow({
  label,
  enabled,
  expanded,
  onEnabledChange,
  onExpandedChange,
  onEdit,
  showEdit = true,
}: AdminEditableToggleRowProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-base font-medium leading-6 text-[#021326]">{label}</p>

      <div className="flex shrink-0 items-center justify-end gap-[18px]">
        {showEdit ? (
          <Button
            disableElevation
            startIcon={<EditOutlinedIcon sx={{ fontSize: 14 }} />}
            onClick={onEdit}
            sx={{
              ...primaryButtonSx,
              minWidth: 87,
              px: '12px',
              py: '6px',
              fontSize: '14px',
            }}
          >
            Edit
          </Button>
        ) : null}

        <CategoryToggleSwitch checked={enabled} onChange={onEnabledChange} size="sm" />

        <IconButton
          aria-label={expanded ? 'Collapse row' : 'Expand row'}
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
  );
}
