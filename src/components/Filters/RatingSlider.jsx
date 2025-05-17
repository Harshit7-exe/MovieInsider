import { Box, Typography, Slider, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export default function RatingSlider({ minRating, onChange }) {
  return (
    <Box 
      sx={{ 
        width: { xs: '100%', md: 300 },
        padding: 2,
        borderRadius: 2,
        position: 'relative',
      }}
    >
      <Typography 
        gutterBottom 
        sx={{ 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}
      >
        Minimum Rating: 
        <Box 
          sx={{ 
            display: 'inline-flex',
            alignItems: 'center',
            bgcolor: 'rgba(229, 9, 20, 0.1)',
            borderRadius: '12px',
            padding: '4px 12px',
            border: '1px solid rgba(229, 9, 20, 0.3)',
          }}
        >
          <Typography 
            component="span" 
            sx={{ 
              color: 'primary.main',
              fontWeight: 'bold',
              mr: 1 
            }}
          >
            {minRating}
          </Typography>
          <StarIcon sx={{ color: 'primary.main', fontSize: 18 }} />
        </Box>
      </Typography>
      
      <Slider
        value={minRating}
        onChange={onChange}
        step={1}
        min={0}
        max={10}
        valueLabelDisplay="auto"
        sx={{
          color: 'primary.main',
          '& .MuiSlider-thumb': {
            width: 28,
            height: 28,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&:before': {
              boxShadow: '0 2px 12px 0 rgba(229, 9, 20, 0.4)',
            },
            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0 0 0 8px rgba(229, 9, 20, 0.16)',
            },
            '&.Mui-active': {
              width: 34,
              height: 34,
            },
          },
          '& .MuiSlider-rail': {
            opacity: 0.32,
          },
          '& .MuiSlider-track': {
            border: 'none',
            backgroundImage: 'linear-gradient(90deg, #E50914, #FF8E53)',
          },
          '& .MuiSlider-mark': {
            backgroundColor: '#bfbfbf',
            height: 8,
            width: 1,
            '&.MuiSlider-markActive': {
              opacity: 1,
              backgroundColor: 'currentColor',
            },
          },
        }}
      />
      <Rating 
        value={minRating / 2}
        precision={0.5}
        readOnly
        sx={{
          mt: 2,
          '& .MuiRating-icon': {
            color: theme => theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );
}
