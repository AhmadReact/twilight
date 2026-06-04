import { brandColors, grayColors } from '@/lib/theme';

export const outlineButtonSx = {
  borderRadius: '1000px',
  border: `1px solid ${grayColors[300]}`,
  bgcolor: '#FFFFFF',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  px: '14px',
  py: '10px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  color: grayColors[700],
  '&:hover': {
    bgcolor: '#F9FAFB',
    borderColor: grayColors[300],
  },
};

export const destructiveOutlineButtonSx = {
  borderRadius: '1000px',
  border: '1px solid #FDA29B',
  bgcolor: '#FFFFFF',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  px: '12px',
  py: '8px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  color: '#B42318',
  '&:hover': { bgcolor: '#FEF3F2', borderColor: '#FDA29B' },
};

export const primaryButtonSx = {
  borderRadius: '1000px',
  border: `1px solid ${brandColors[300]}`,
  backgroundImage:
    'linear-gradient(184.75deg, rgb(195, 134, 255) 5.31%, rgb(150, 67, 232) 87.07%)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  px: '14px',
  py: '8px',
  fontSize: '13px',
  fontWeight: 600,
  lineHeight: '20px',
  color: '#FFFFFF',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundImage:
      'linear-gradient(184.75deg, rgb(183, 110, 255) 5.31%, rgb(117, 53, 181) 87.07%)',
  },
};
