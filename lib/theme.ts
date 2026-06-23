'use client';

import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const brandColors = {
  300: '#C386FF',
  400: '#B76EFF',
  600: '#9643E8',
  700: '#7535B5',
};

export const brandGradient = `linear-gradient(184.75deg, ${brandColors[300]} 5.31%, ${brandColors[600]} 87.07%)`;

export const notificationGradient = `linear-gradient(184.75deg, #E8D4FF 5.31%, ${brandColors[300]} 40%, ${brandColors[600]} 87.07%)`;

export const notificationAlertSx = {
  width: '100%',
  minWidth: 320,
  borderRadius: '12px',
  border: `1px solid ${brandColors[300]}`,
  boxShadow: '0px 4px 12px rgba(16, 24, 40, 0.06)',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#FFFFFF',
  backgroundColor: '#9643E8',
  // backgroundImage: notificationGradient,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '& .MuiAlert-icon': {
    color: '#FFFFFF',
  },
  '& .MuiAlert-action .MuiIconButton-root': {
    color: '#FFFFFF',
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
    },
  },
  '&.MuiAlert-filledError, &.MuiAlert-filledSuccess, &.MuiAlert-filledWarning, &.MuiAlert-filledInfo':
    {
      backgroundColor: 'transparent',
      backgroundImage: notificationGradient,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: '#FFFFFF',
    },
};

export const grayColors = {
  300: '#D0D5DD',
  500: '#667085',
  600: '#475467',
  700: '#344054',
  900: '#101828',
};

export const loginFieldSx = {
  m: 0,
  '& .MuiOutlinedInput-root': {
    borderRadius: '1000px',
    backgroundColor: '#FFFFFF',
    fontSize: '16px',
    lineHeight: '24px',
    boxShadow: '0px 1px 1px rgba(16, 24, 40, 0.05)',
    '& fieldset': {
      borderColor: grayColors[300],
      borderWidth: '1px',
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
    padding: '10px 14px',
    height: '24px',
    boxSizing: 'content-box',
    color: grayColors[900],
    '&::placeholder': {
      color: grayColors[500],
      opacity: 1,
    },
  },
};

export const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    primary: {
      main: brandColors[600],
      dark: brandColors[700],
      light: brandColors[400],
    },
    text: {
      primary: grayColors[900],
      secondary: grayColors[600],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: poppins.style.fontFamily,
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export { poppins };
