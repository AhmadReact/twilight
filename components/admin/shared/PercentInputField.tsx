'use client';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { grayColors } from '@/lib/theme';

type PercentInputFieldProps = {
  value: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
};

export default function PercentInputField({
  value,
  onChange,
  disabled = false,
}: PercentInputFieldProps) {
  return (
    <div className="flex w-full overflow-hidden rounded-full border border-[#D0D5DD] bg-white shadow-[0px_1px_1px_rgba(16,24,40,0.05)]">
      <Select
        value="%"
        disabled
        variant="standard"
        disableUnderline
        IconComponent={KeyboardArrowDownOutlinedIcon}
        sx={{
          minWidth: 88,
          pl: '15px',
          py: '10px',
          fontSize: { xs: '20px', sm: '25px' },
          lineHeight: { xs: '28px', sm: '38px' },
          color: '#616161',
          '& .MuiSelect-icon': { color: grayColors[700], fontSize: 24, mr: 1 },
        }}
      >
        <MenuItem value="%">%</MenuItem>
      </Select>
      <TextField
        value={value}
        disabled={disabled}
        type="number"
        onChange={(event) => {
          const next = Number.parseInt(event.target.value, 10);
          if (!Number.isNaN(next)) {
            onChange?.(Math.min(100, Math.max(0, next)));
          } else if (event.target.value === '') {
            onChange?.(0);
          }
        }}
        sx={{
          flex: 1,
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            bgcolor: 'transparent',
            fontSize: { xs: '20px', sm: '25px' },
            lineHeight: { xs: '28px', sm: '38px' },
            '& fieldset': { border: 'none' },
          },
          '& .MuiOutlinedInput-input': {
            py: '10px',
            pr: '15px',
            pl: '12px',
            textAlign: 'right',
            color: '#616161',
          },
        }}
      />
    </div>
  );
}
