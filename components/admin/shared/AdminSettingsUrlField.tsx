'use client';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { grayColors } from '@/lib/theme';

type AdminSettingsUrlFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export default function AdminSettingsUrlField({
  label,
  value,
  onChange,
  disabled = false,
}: AdminSettingsUrlFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="text-sm font-medium leading-5 text-[#344054]">{label}</label>
      <div className="flex w-full overflow-hidden rounded-full border border-[#D0D5DD] bg-[#FCFCFD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
        <TextField
          fullWidth
          size="small"
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
          type="url"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 0,
              bgcolor: '#FFFFFF',
              fontSize: '16px',
              lineHeight: '24px',
              '& fieldset': { border: 'none' },
            },
            '& .MuiOutlinedInput-input': {
              py: '8px',
              px: '12px',
              color: grayColors[900],
              '&.Mui-disabled': {
                WebkitTextFillColor: grayColors[900],
              },
            },
          }}
        />
        <IconButton
          aria-label={`Edit ${label}`}
          disabled={disabled}
          sx={{
            alignSelf: 'stretch',
            borderLeft: '1px solid #D0D5DD',
            borderRadius: 0,
            px: '10px',
            color: grayColors[700],
            '&:hover': { bgcolor: '#F9FAFB' },
          }}
        >
          <EditOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </div>
    </div>
  );
}
