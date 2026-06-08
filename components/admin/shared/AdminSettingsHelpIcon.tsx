'use client';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { grayColors } from '@/lib/theme';

type AdminSettingsHelpIconProps = {
  title: string;
};

export default function AdminSettingsHelpIcon({ title }: AdminSettingsHelpIconProps) {
  return (
    <Tooltip
      title={title}
      arrow
      placement="top"
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: '#101828',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '18px',
            px: '12px',
            py: '8px',
            borderRadius: '8px',
          },
        },
        arrow: {
          sx: { color: '#101828' },
        },
      }}
    >
      <IconButton
        aria-label={title}
        size="small"
        tabIndex={-1}
        sx={{
          p: 0,
          color: '#98A2B3',
          '&:hover': { bgcolor: 'transparent', color: grayColors[500] },
        }}
      >
        <HelpOutlineOutlinedIcon sx={{ fontSize: 16 }} />
      </IconButton>
    </Tooltip>
  );
}
