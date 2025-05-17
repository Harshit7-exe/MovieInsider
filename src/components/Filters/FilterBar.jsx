import { Box, Container, Paper, Typography } from "@mui/material";
import GenreSelect from "./GenreSelect";
import RatingSlider from "./RatingSlider";

export default function FilterBar({ genres, selectedGenre, minRating, onGenreChange, onRatingChange }) {
  return (
    <Container maxWidth="xl" sx={{ mt: 8, position: 'relative', zIndex: 1 }}>
      <Paper 
        elevation={3}
        sx={{
          padding: 3,
          background: 'rgba(35, 35, 35, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 3,
            color: 'primary.main',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          Discover Movies
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: { xs: 'stretch', md: 'center' },
          }}
        >
          <GenreSelect genres={genres} selected={selectedGenre} onChange={onGenreChange} />
          <RatingSlider minRating={minRating} onChange={onRatingChange} />
        </Box>
      </Paper>
    </Container>
  );
}
