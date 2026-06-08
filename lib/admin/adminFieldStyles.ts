import { brandColors, grayColors } from '@/lib/theme';

const settingsFieldRootSx = {
  borderRadius: '1000px',
  bgcolor: '#FFFFFF',
  fontSize: '16px',
  lineHeight: '24px',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  '& fieldset': {
    borderColor: grayColors[300],
  },
  '&:hover fieldset': {
    borderColor: grayColors[300],
  },
  '&.Mui-focused fieldset': {
    borderColor: brandColors[600],
    borderWidth: '1px',
  },
};

export const adminPillFieldSx = {
  '& .MuiOutlinedInput-root': {
    ...settingsFieldRootSx,
    bgcolor: '#FCFCFD',
    boxShadow: '0px 1px 1px rgba(16, 24, 40, 0.05)',
    '&.Mui-disabled': {
      bgcolor: '#FCFCFD',
      '& fieldset': { borderColor: grayColors[300] },
    },
  },
  '& .MuiOutlinedInput-input': {
    py: '8px',
    px: '12px',
    color: grayColors[900],
    '&.Mui-disabled': {
      WebkitTextFillColor: grayColors[900],
    },
  },
};

export const adminSettingsFieldSx = {
  '& .MuiOutlinedInput-root': settingsFieldRootSx,
  '& .MuiOutlinedInput-input': {
    py: '10px',
    px: '14px',
    color: grayColors[900],
  },
  '& .MuiSelect-select': {
    py: '10px',
    px: '14px',
    color: grayColors[500],
  },
};

export const adminTextareaFieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    bgcolor: '#FCFCFD',
    fontSize: '16px',
    lineHeight: '24px',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    alignItems: 'flex-start',
    '& fieldset': {
      borderColor: grayColors[300],
    },
    '&:hover fieldset': {
      borderColor: grayColors[300],
    },
    '&.Mui-focused fieldset': {
      borderColor: brandColors[600],
      borderWidth: '1px',
    },
    '&.Mui-disabled': {
      bgcolor: '#FCFCFD',
      '& fieldset': { borderColor: grayColors[300] },
    },
  },
  '& .MuiOutlinedInput-input': {
    py: '12px',
    px: '14px',
    color: grayColors[900],
    '&.Mui-disabled': {
      WebkitTextFillColor: grayColors[900],
    },
  },
};

export const adminSettingsTextareaSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    bgcolor: '#FFFFFF',
    fontSize: '16px',
    lineHeight: '24px',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    alignItems: 'flex-start',
    '& fieldset': {
      borderColor: grayColors[300],
    },
    '&:hover fieldset': {
      borderColor: grayColors[300],
    },
    '&.Mui-focused fieldset': {
      borderColor: brandColors[600],
      borderWidth: '1px',
    },
  },
  '& .MuiOutlinedInput-input': {
    py: '12px',
    px: '14px',
    color: grayColors[900],
  },
};
