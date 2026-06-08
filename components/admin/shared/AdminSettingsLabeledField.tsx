'use client';

import TextField from '@mui/material/TextField';
import { adminSettingsFieldSx } from '@/lib/admin/adminFieldStyles';

type AdminSettingsLabeledFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  disabled?: boolean;
};

export default function AdminSettingsLabeledField({
  label,
  value,
  onChange,
  type = 'text',
  disabled = false,
}: AdminSettingsLabeledFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="text-sm font-medium leading-5 text-[#344054]">{label}</label>
      <TextField
        fullWidth
        size="small"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        disabled={disabled}
        sx={adminSettingsFieldSx}
      />
    </div>
  );
}
