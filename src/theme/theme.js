import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E50914',
      light: '#ff4d4d',
      dark: '#b71c1c',
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#f0f0f0',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
      gradient: 'linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,1) 100%)',
    },
    custom: {
      spotlight: 'rgba(229, 9, 20, 0.1)',
      overlay: 'rgba(0, 0, 0, 0.7)',
      glass: 'rgba(255, 255, 255, 0.1)',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)',
          boxShadow: 'none',
          transition: 'background-color 0.3s ease',
          '&.scrolled': {
            backgroundColor: '#141414',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 15px rgba(255,255,255,0.2)',
            zIndex: 1,
          },
        },
      },
    },
  },
});
