import { Card, CardMedia, Box, Rating, Typography, Chip } from '@mui/material';
import { useState } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      sx={{ 
        maxWidth: 200,
        backgroundColor: 'transparent',
        position: 'relative',
        '&:hover': {
          '& .movie-info': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        sx={{
          borderRadius: '8px',
          filter: isHovered ? 'brightness(0.3)' : 'brightness(1)',
          transition: 'filter 0.3s ease',
        }}
      />
      {movie.adult && (
        <Chip
          icon={<WarningAmberIcon />}
          label="18+"
          color="error"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'rgba(229, 9, 20, 0.9)',
            backdropFilter: 'blur(4px)',
            fontWeight: 'bold',
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': { boxShadow: '0 0 0 0 rgba(229, 9, 20, 0.4)' },
              '70%': { boxShadow: '0 0 0 10px rgba(229, 9, 20, 0)' },
              '100%': { boxShadow: '0 0 0 0 rgba(229, 9, 20, 0)' },
            },
          }}
        />
      )}
      <Box
        className="movie-info"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.3s ease',
          borderRadius: '0 0 8px 8px',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 1,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          {movie.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Rating 
            value={movie.vote_average / 2} 
            precision={0.5} 
            readOnly
            size="small"
            sx={{
              '& .MuiRating-icon': {
                color: '#E50914',
              }
            }}
          />
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#E50914',
              fontWeight: 'bold'
            }}
          >
            {movie.vote_average.toFixed(1)}
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#ccc',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
          }}
        >
          {movie.overview}
        </Typography>
      </Box>
    </Card>
  );
}
