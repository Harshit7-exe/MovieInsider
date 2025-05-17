import { useNavigate } from "react-router-dom";
import { Grid, Box, Container, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  const navigate = useNavigate();

  if (!movies.length) {
    return (
      <Box 
        sx={{ 
          height: '70vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'text.secondary',
            textAlign: 'center',
            animation: 'fadeIn 1s ease-in',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          No movies found. Try adjusting your filters.
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 10, mb: 4 }}>
      <Grid 
        container 
        spacing={3}
        sx={{
          '& .MuiGrid-item': {
            animation: 'fadeIn 0.6s ease-in',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }
        }}
      >
        {movies.map((movie, index) => (
          <Grid 
            item 
            key={movie.id}
            xs={12} sm={6} md={4} lg={3}
            sx={{ 
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <Box 
              onClick={() => navigate(`/movie/${movie.id}`)}
              sx={{ cursor: 'pointer' }}
            >
              <MovieCard movie={movie} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
