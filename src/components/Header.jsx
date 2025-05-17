import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

export default function Header({ onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="fixed" className={isScrolled ? 'scrolled' : ''}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h4" 
          noWrap 
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #E50914 30%, #FF8E53 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '1px'
          }}
        >
           MovieInsider
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Animated Search Box */}
          <Box
            sx={{
              position: 'relative',
              width: showSearch ? 300 : 40,
              transition: 'width 0.3s ease',
            }}
          >
            <IconButton 
              onClick={() => setShowSearch(!showSearch)}
              sx={{ 
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                color: 'white',
                '&:hover': { color: theme.palette.primary.main }
              }}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search movies..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSearch(e.target.value);
              }}
              sx={{
                color: 'inherit',
                width: '100%',
                opacity: showSearch ? 1 : 0,
                transition: 'opacity 0.3s ease',
                '& input': {
                  padding: '8px 40px 8px 16px',
                  borderRadius: '20px',
                  backgroundColor: alpha(theme.palette.common.white, 0.15),
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
