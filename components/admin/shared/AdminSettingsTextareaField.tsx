'use client';

import TextField from '@mui/material/TextField';
import { adminSettingsTextareaSx } from '@/lib/admin/adminFieldStyles';

type AdminSettingsTextareaFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  minRows?: number;
};

export default function AdminSettingsTextareaField({
  label,
  value,
  onChange,
  disabled = false,
  minRows = 6,
}: AdminSettingsTextareaFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="text-sm font-medium leading-5 text-[#344054]">{label}</label>
      <TextField
        fullWidth
        multiline
        minRows={minRows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        sx={adminSettingsTextareaSx}
      />
    </div>
  );
}
