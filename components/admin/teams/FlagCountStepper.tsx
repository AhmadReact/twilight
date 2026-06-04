'use client';

import IconButton from '@mui/material/IconButton';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { brandColors, grayColors } from '@/lib/theme';

type FlagCountStepperProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function FlagCountStepper({ value, onChange }: FlagCountStepperProps) {
  return (
    <div className="flex items-center gap-1">
      <IconButton
        size="small"
        aria-label="Decrease flag count"
        disabled={value <= 0}
        onClick={() => onChange(Math.max(0, value - 1))}
        sx={{
          bgcolor: '#EAECF0',
          width: 28,
          height: 28,
          '&:hover': { bgcolor: '#D0D5DD' },
          '&.Mui-disabled': { bgcolor: '#EAECF0', opacity: 0.6 },
        }}
      >
        <RemoveOutlinedIcon sx={{ fontSize: 12, color: grayColors[700] }} />
      </IconButton>
      <span className="flex h-7 min-w-[48px] items-center justify-center rounded-full bg-[#EAECF0] px-2 text-sm font-medium text-[#344054]">
        {value}
      </span>
      <IconButton
        size="small"
        aria-label="Increase flag count"
        onClick={() => onChange(value + 1)}
        sx={{
          bgcolor: '#F6EDFF',
          width: 28,
          height: 28,
          '&:hover': { bgcolor: '#F9F5FF' },
        }}
      >
        <AddOutlinedIcon sx={{ fontSize: 12, color: brandColors[600] }} />
      </IconButton>
    </div>
  );
}
