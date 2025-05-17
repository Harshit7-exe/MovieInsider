import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import GenreSelect from "./GenreSelect";
import RatingSlider from "./RatingSlider";
import AdultToggle from "./AdultToggle";

export default function FilterBar({ 
  genres, 
  selectedGenre, 
  minRating, 
  showAdult,
  onGenreChange, 
  onRatingChange,
  onAdultChange 
}) {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 2, md: 4 },
          my: 3,
          p: 3,
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4)`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 12px 40px rgba(0, 0, 0, 0.6)`,
            borderColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
      >
        <GenreSelect genres={genres} selected={selectedGenre} onChange={onGenreChange} />
        <RatingSlider minRating={minRating} onChange={onRatingChange} />
        <AdultToggle checked={showAdult} onChange={onAdultChange} />
      </Paper>
    </Container>
  );
}
