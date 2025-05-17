import { Card, CardMedia, CardContent, Typography, Box, Rating } from '@mui/material';
import { useState } from 'react';

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
        <Rating 
          value={movie.vote_average / 2} 
          precision={0.5} 
          readOnly
          sx={{
            '& .MuiRating-icon': {
              color: '#E50914',
            }
          }}
        />
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#ccc',
            mt: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {movie.overview}
        </Typography>
      </Box>
    </Card>
  );
}
