'use client';

import CheckIcon from '@mui/icons-material/Check';
import FormControl from '@mui/material/FormControl';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { adminSettingsFieldSx } from '@/lib/admin/adminFieldStyles';
import { grayColors } from '@/lib/theme';

export type AdminSettingsSelectOption = {
  value: string;
  label: string;
};

type AdminSettingsSelectFieldProps = {
  label: string;
  value: string;
  options: AdminSettingsSelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  showSelectedCheck?: boolean;
};

export default function AdminSettingsSelectField({
  label,
  value,
  options,
  onChange,
  disabled = false,
  showSelectedCheck = false,
}: AdminSettingsSelectFieldProps) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  const selectedLabel = options.find((option) => option.value === value)?.label ?? '';

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="text-sm font-medium leading-5 text-[#344054]">{label}</label>
      <FormControl fullWidth size="small" disabled={disabled}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          renderValue={() => (
            <span className="text-base font-medium leading-6 text-[#101828]">{selectedLabel}</span>
          )}
          sx={{
            ...adminSettingsFieldSx,
            '& .MuiSelect-select': {
              py: '10px',
              px: '14px',
              color: grayColors[900],
            },
          }}
          MenuProps={{
            slotProps: {
              paper: {
                sx: {
                  mt: 1,
                  borderRadius: '8px',
                  border: '1px solid #EAECF0',
                  boxShadow:
                    '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                },
              },
            },
          }}
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{
                  mx: '6px',
                  my: '1px',
                  borderRadius: '6px',
                  py: '10px',
                  pl: '8px',
                  pr: '10px',
                  bgcolor: showSelectedCheck && isSelected ? '#F9FAFB' : 'transparent',
                  '&.Mui-selected': {
                    bgcolor: showSelectedCheck && isSelected ? '#F9FAFB' : 'transparent',
                    '&:hover': { bgcolor: '#F9FAFB' },
                  },
                  '&:hover': { bgcolor: '#F9FAFB' },
                }}
              >
                <ListItemText
                  primary={option.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '24px',
                        color: grayColors[900],
                      },
                    },
                  }}
                />
                {showSelectedCheck && isSelected ? (
                  <ListItemIcon sx={{ minWidth: 20, justifyContent: 'flex-end' }}>
                    <CheckIcon sx={{ fontSize: 20, color: '#A54AFF' }} />
                  </ListItemIcon>
                ) : null}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
