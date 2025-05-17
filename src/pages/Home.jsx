import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { fetchPopularMovies, searchMovies } from "../api/tmdb";
import MovieGrid from "../components/MovieGrid";
import Header from "../components/Header";
import FilterBar from "../components/Filters/FilterBar";
import { fetchGenres } from "../api/tmdb";

export default function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [genres, setGenres] = useState([]);  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [showAdult, setShowAdult] = useState(false);
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [genresData, moviesData] = await Promise.all([
          fetchGenres(),
          fetchPopularMovies()
        ]);
        setGenres(genresData);
        setAllMovies(moviesData);
        applyFilters(moviesData, selectedGenre, minRating);
      } catch (error) {
        console.error('Error fetching initial data:', error);
        // Set empty arrays as fallback to prevent white screen
        setGenres([]);
        setAllMovies([]);
      }
    };
    
    fetchInitialData();
  }, []);  useEffect(() => {
    applyFilters(allMovies, selectedGenre, minRating);
  }, [allMovies, selectedGenre, minRating, showAdult]);
  const applyFilters = (movies, genre, rating) => {
    const filtered = movies.filter((movie) =>
      (!genre || movie.genre_ids.includes(Number(genre))) &&
      movie.vote_average >= rating &&
      (showAdult || !movie.adult) // Show adult movies only if showAdult is true
    );
    setDisplayedMovies(filtered);
  };

  const handleSearch = async (query) => {
    let results = [];

    if (!query.trim()) {
      results = await fetchPopularMovies();
    } else {
      results = await searchMovies(query);
    }

    setAllMovies(results);
    applyFilters(results, selectedGenre, minRating);
  };
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        bgcolor: 'background.default',
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
      }}
    >
      <Header onSearch={handleSearch} />
      
      {/* Hero Section */}
      <Box
        sx={{
          height: '70vh',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(https://image.tmdb.org/t/p/original${displayedMovies[0]?.backdrop_path || ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
            transition: 'all 0.3s ease',
          },
        }}
      >
        <Container 
          maxWidth="xl" 
          sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 2,
              animation: 'fadeInUp 1s ease',
              '@keyframes fadeInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(20px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            Welcome to MovieInsider
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '600px',
              mb: 4,
              animation: 'fadeInUp 1s ease 0.3s',
              animationFillMode: 'both',
            }}
          >
            Discover amazing movies and explore your favorite genres
          </Typography>
        </Container>
      </Box>      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        minRating={minRating}
        showAdult={showAdult}
        onGenreChange={(e) => setSelectedGenre(e.target.value)}
        onRatingChange={(_, val) => setMinRating(val)}
        onAdultChange={(e) => setShowAdult(e.target.checked)}
      />
      
      <MovieGrid movies={displayedMovies} />
    </Box>
  );
}
