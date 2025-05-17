import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#141414',
      paper: '#232323',
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
