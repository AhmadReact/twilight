'use client';

import Switch from '@mui/material/Switch';

type CategoryToggleSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md';
  disabled?: boolean;
};

const switchSizes = {
  sm: {
    width: 36,
    height: 20,
    thumb: 16,
    translateX: 16,
    padding: '2px',
  },
  md: {
    width: 44,
    height: 24,
    thumb: 20,
    translateX: 20,
    padding: '2px',
  },
};

export default function CategoryToggleSwitch({
  checked,
  onChange,
  size = 'md',
  disabled = false,
}: CategoryToggleSwitchProps) {
  const dimensions = switchSizes[size];

  return (
    <Switch
      checked={checked}
      disabled={disabled}
      onChange={(_, value) => onChange(value)}
      sx={{
        width: dimensions.width,
        height: dimensions.height,
        p: 0,
        '& .MuiSwitch-switchBase': {
          p: dimensions.padding,
          '&.Mui-checked': {
            transform: `translateX(${dimensions.translateX}px)`,
            color: '#FFFFFF',
            '& + .MuiSwitch-track': {
              bgcolor: '#A54AFF',
              opacity: 1,
            },
          },
        },
        '& .MuiSwitch-thumb': {
          width: dimensions.thumb,
          height: dimensions.thumb,
          boxShadow:
            '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        },
        '& .MuiSwitch-track': {
          borderRadius: '12px',
          bgcolor: '#F2F4F7',
          opacity: 1,
        },
      }}
    />
  );
}
