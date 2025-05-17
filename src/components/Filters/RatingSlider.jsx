import { Stack, Box, Slider, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export default function RatingSlider({ minRating, onChange }) {
  return (
    <Stack 
      spacing={2} 
      sx={{ 
        width: { xs: '100%', sm: 200 },
        bgcolor: 'rgba(0, 0, 0, 0.2)',
        p: 2,
        borderRadius: 2,
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: 1
      }}>
        <Rating
          value={minRating / 2}
          readOnly
          precision={0.5}
          size="small"
          sx={{
            '& .MuiRating-icon': {
              color: theme => theme.palette.primary.main,
            }
          }}
        />
        <Box
          component="span"
          sx={{
            bgcolor: 'rgba(229, 9, 20, 0.1)',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            border: '1px solid rgba(229, 9, 20, 0.2)',
            color: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontSize: '0.875rem',
            fontWeight: 'bold'
          }}
        >
          {minRating}
          <StarIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>
      
      <Slider
        value={minRating}
        onChange={onChange}
        step={0.5}
        min={0}
        max={10}
        valueLabelDisplay="auto"
        sx={{
          color: 'primary.main',
          '& .MuiSlider-rail': {
            opacity: 0.3,
          },
          '& .MuiSlider-track': {
            border: 'none',
            backgroundImage: 'linear-gradient(to right, #E50914, #FF8E53)',
          },
          '& .MuiSlider-thumb': {
            width: 20,
            height: 20,
            backgroundColor: '#fff',
            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0 0 0 8px rgba(229, 9, 20, 0.16)',
            },
            '&:before': {
              boxShadow: '0 2px 12px 0 rgba(229, 9, 20, 0.4)',
            },
          },
          '& .MuiSlider-valueLabel': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(4px)',
          },
        }}
      />
    </Stack>
  );
}
