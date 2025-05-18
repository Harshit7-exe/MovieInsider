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
          justifyContent: 'center',
          background: 'linear-gradient(45deg, rgba(229,9,20,0.05) 0%, rgba(0,0,0,0) 100%)',
          borderRadius: '24px',
          backdropFilter: 'blur(10px)',
          margin: '24px'
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'text.secondary',
            textAlign: 'center',
            animation: 'fadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(30px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          No movies found. Try adjusting your filters.
        </Typography>
      </Box>
    );
  }  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        mt: 6, 
        mb: 4,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Grid 
        container 
        spacing={4}
        justifyContent="center"
        sx={{
          '& .MuiGrid-item': {
            display: 'flex',
            justifyContent: 'center',
            animation: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            '@keyframes fadeIn': {
              '0%': { 
                opacity: 0, 
                transform: 'translateY(20px)',
              },
              '100%': { 
                opacity: 1, 
                transform: 'translateY(0)',
              }
            }
          }
        }}
      >
        {movies.map((movie, index) => (          <Grid 
            item 
            key={movie.id}
            xs={12} sm={6} md={4} lg={3} xl={2.4}
            sx={{ 
              animationDelay: `${index * 0.1}s`,
              minWidth: { xs: '280px', sm: '300px' },
              maxWidth: '350px'
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
