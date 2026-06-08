'use client';

import Checkbox from '@mui/material/Checkbox';
import { brandColors } from '@/lib/theme';

type SelectableCheckboxCardProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export default function SelectableCheckboxCard({
  label,
  checked,
  onChange,
  disabled = false,
}: SelectableCheckboxCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`flex w-full items-start rounded-xl p-4 text-left transition-colors ${
        checked
          ? 'border-2 border-[#A54AFF] bg-white'
          : 'border border-[#EAECF0] bg-white hover:bg-[#F9FAFB]'
      } ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
    >
      <Checkbox
        checked={checked}
        tabIndex={-1}
        disableRipple
        disabled={disabled}
        icon={
          <span className="block size-5 rounded-md border border-[#D0D5DD] bg-white" />
        }
        checkedIcon={
          <span className="flex size-5 items-center justify-center rounded-md border border-[#A54AFF] bg-[#A54AFF] text-xs leading-none text-white">
            ✓
          </span>
        }
        sx={{
          p: 0,
          mr: '12px',
          mt: '2px',
          '&.Mui-checked': { color: brandColors[600] },
        }}
      />
      <span className="text-base font-medium leading-6 text-[#344054]">{label}</span>
    </button>
  );
}
