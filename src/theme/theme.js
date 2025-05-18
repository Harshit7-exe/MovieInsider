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
  },  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          transition: 'all 0.4s ease',
          '&.scrolled': {
            backgroundColor: 'rgba(10,10,10,0.95)',
            backdropFilter: 'blur(20px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26,26,26,0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.05) translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(229,9,20,0.2)',
            zIndex: 1,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'all 0.3s ease',
        },
        filled: {
          backgroundColor: 'rgba(229,9,20,0.1)',
          '&:hover': {
            backgroundColor: 'rgba(229,9,20,0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 24px',
          transition: 'all 0.3s ease',
        },
        contained: {
          backgroundImage: 'linear-gradient(45deg, #E50914, #ff4d4d)',
          boxShadow: '0 4px 15px rgba(229,9,20,0.3)',
          '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #b71c1c, #E50914)',
            boxShadow: '0 6px 20px rgba(229,9,20,0.4)',
          },
        },
      },
    },
  },
});
