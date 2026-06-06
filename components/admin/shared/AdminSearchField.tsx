'use client';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { grayColors } from '@/lib/theme';

type AdminSearchFieldProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  showMic?: boolean;
};

export default function AdminSearchField({
  placeholder,
  value,
  onChange,
  showMic = true,
}: AdminSearchFieldProps) {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '999px',
          bgcolor: '#FFFFFF',
          '& fieldset': {
            borderWidth: 2,
            borderColor: grayColors[300],
          },
          '&:hover fieldset': {
            borderColor: grayColors[300],
          },
          '&.Mui-focused fieldset': {
            borderWidth: 2,
            borderColor: grayColors[300],
          },
        },
        '& .MuiOutlinedInput-input': {
          py: '12px',
          px: 0,
          fontSize: '16px',
          lineHeight: '24px',
          color: grayColors[900],
          '&::placeholder': {
            color: grayColors[300],
            opacity: 1,
          },
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon sx={{ fontSize: 16, color: grayColors[500] }} />
            </InputAdornment>
          ),
          endAdornment: showMic ? (
            <InputAdornment position="end">
              <MicNoneOutlinedIcon sx={{ fontSize: 20, color: grayColors[500] }} />
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  );
}
