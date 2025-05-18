import { Card, CardMedia, Box, Rating, Typography, Chip } from '@mui/material';
import { useState } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card 
      elevation={3}
      sx={{ 
        maxWidth: 300,
        width: '100%',
        height: 450,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
          '& .movie-info': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '& .movie-backdrop': {
            opacity: 0.7,
            transform: 'scale(1.1)',
          }
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <CardMedia
          className="movie-backdrop"
          component="img"
          image={movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/500x750?text=No+Poster'
          }
          alt={movie.title}
          onLoad={() => setImageLoaded(true)}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: 'background.paper',
            opacity: imageLoaded ? 1 : 0.5,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: isHovered ? 'brightness(0.7)' : 'brightness(0.9)',
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(
              0deg,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.6) 50%,
              rgba(0,0,0,0.3) 100%
            )`,
            opacity: isHovered ? 1 : 0.7,
            transition: 'opacity 0.5s ease',
          }}
        />
      </Box>

      {/* Adult Content Badge */}
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

      {/* Movie Information */}
      <Box
        className="movie-info"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
          opacity: isHovered ? 1 : 0.8,
          transform: isHovered ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 600,
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '3.6em',
          }}
        >
          {movie.title}
        </Typography>

        {/* Rating and Release Date */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating
              value={movie.vote_average / 2}
              precision={0.5}
              readOnly
              size="small"
              sx={{
                '& .MuiRating-icon': {
                  color: '#E50914',
                  filter: 'drop-shadow(0 2px 4px rgba(229,9,20,0.3))',
                }
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#E50914',
                fontWeight: 600,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {movie.vote_average.toFixed(1)}
            </Typography>
          </Box>
          
          {movie.release_date && (
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                ml: 'auto',
                fontWeight: 500,
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
              }}
            >
              {formatDate(movie.release_date)}
            </Typography>
          )}
        </Box>

        {/* Overview */}
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255,255,255,0.8)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            textShadow: '0 1px 2px rgba(0,0,0,0.8)',
            transition: 'all 0.3s ease',
            opacity: isHovered ? 1 : 0.7,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          {movie.overview}
        </Typography>
      </Box>
    </Card>
  );
}
