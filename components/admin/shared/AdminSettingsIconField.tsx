'use client';

import type { SvgIconComponent } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AdminSettingsHelpIcon from '@/components/admin/shared/AdminSettingsHelpIcon';
import { adminSettingsFieldSx } from '@/lib/admin/adminFieldStyles';
import { grayColors } from '@/lib/theme';

type AdminSettingsIconFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon: SvgIconComponent;
  type?: string;
  disabled?: boolean;
  helpTooltip?: string;
};

export default function AdminSettingsIconField({
  label,
  value,
  onChange,
  icon: Icon,
  type = 'text',
  disabled = false,
  helpTooltip,
}: AdminSettingsIconFieldProps) {
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
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" sx={{ mr: 0.5 }}>
                <Icon sx={{ fontSize: 20, color: grayColors[700] }} />
              </InputAdornment>
            ),
            endAdornment: helpTooltip ? (
              <InputAdornment position="end">
                <AdminSettingsHelpIcon title={helpTooltip} />
              </InputAdornment>
            ) : undefined,
          },
        }}
      />
    </div>
  );
}
