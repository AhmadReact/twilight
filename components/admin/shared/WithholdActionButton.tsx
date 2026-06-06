'use client';

import Button from '@mui/material/Button';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

type WithholdActionButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};

export default function WithholdActionButton({
  disabled = false,
  onClick,
}: WithholdActionButtonProps) {
  return (
    <Button
      disableElevation
      disabled={disabled}
      onClick={onClick}
      startIcon={<BlockOutlinedIcon sx={{ fontSize: 18 }} />}
      sx={{
        minWidth: 0,
        borderRadius: '999px',
        px: '11px',
        py: '7px',
        fontSize: '13px',
        fontWeight: 600,
        lineHeight: '18px',
        textTransform: 'none',
        color: disabled ? '#98A2B3' : '#B42318',
        bgcolor: 'transparent',
        '&:hover': {
          bgcolor: disabled ? 'transparent' : '#FEF3F2',
        },
        '&.Mui-disabled': {
          color: '#98A2B3',
        },
        '& .MuiButton-startIcon': {
          mr: '4px',
          color: 'inherit',
        },
      }}
    >
      Withhold
    </Button>
  );
}
