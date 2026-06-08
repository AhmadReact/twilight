'use client';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AdminSettingsHelpIcon from '@/components/admin/shared/AdminSettingsHelpIcon';
import { grayColors } from '@/lib/theme';

type AdminSettingsAddonFieldProps = {
  label: string;
  addon: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  disabled?: boolean;
  helpTooltip?: string;
};

export default function AdminSettingsAddonField({
  label,
  addon,
  value,
  onChange,
  type = 'number',
  disabled = false,
  helpTooltip,
}: AdminSettingsAddonFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="text-sm font-medium leading-5 text-[#344054]">{label}</label>
      <div className="flex w-full overflow-hidden rounded-full border border-[#D0D5DD] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
        <div className="flex shrink-0 items-center border-r border-[#D0D5DD] py-[10px] pl-[14px] pr-3">
          <span className="whitespace-nowrap text-base leading-6 text-[#475467]">{addon}</span>
        </div>
        <TextField
          fullWidth
          size="small"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          type={type}
          disabled={disabled}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 0,
              bgcolor: 'transparent',
              fontSize: '16px',
              lineHeight: '24px',
              '& fieldset': { border: 'none' },
            },
            '& .MuiOutlinedInput-input': {
              py: '10px',
              px: '14px',
              color: grayColors[900],
            },
          }}
          slotProps={{
            input: {
              endAdornment: helpTooltip ? (
                <InputAdornment position="end">
                  <AdminSettingsHelpIcon title={helpTooltip} />
                </InputAdornment>
              ) : undefined,
            },
          }}
        />
      </div>
    </div>
  );
}
