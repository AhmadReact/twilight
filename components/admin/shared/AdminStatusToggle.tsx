'use client';

import Switch from '@mui/material/Switch';

type AdminStatusToggleProps = {
  active: boolean;
  onChange: (active: boolean) => void;
  activeLabel?: string;
  inactiveLabel?: string;
  inactiveLabelClassName?: string;
};

export default function AdminStatusToggle({
  active,
  onChange,
  activeLabel = 'Active',
  inactiveLabel = 'Inactive',
  inactiveLabelClassName = 'text-[#475467]',
}: AdminStatusToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-sm leading-5 ${active ? 'text-[#079455]' : inactiveLabelClassName}`}
      >
        {active ? activeLabel : inactiveLabel}
      </span>
      <Switch
        checked={active}
        onChange={(_, checked) => onChange(checked)}
        sx={{
          width: 36,
          height: 20,
          p: 0,
          '& .MuiSwitch-switchBase': {
            p: '2px',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#FFFFFF',
              '& + .MuiSwitch-track': {
                bgcolor: '#A54AFF',
                opacity: 1,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            width: 16,
            height: 16,
            boxShadow:
              '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
          },
          '& .MuiSwitch-track': {
            borderRadius: '12px',
            bgcolor: '#D0D5DD',
            opacity: 1,
          },
        }}
      />
    </div>
  );
}
