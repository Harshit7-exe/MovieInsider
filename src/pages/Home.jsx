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
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [showAdult, setShowAdult] = useState(false);
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        console.log('Fetching initial data with showAdult:', showAdult);
        const [genresData, moviesData] = await Promise.all([
          fetchGenres(),
          fetchPopularMovies(showAdult)
        ]);
        console.log('Fetched movies count:', moviesData.length);
        console.log('Sample movies:', moviesData.slice(0, 3).map(m => ({ 
          title: m.title, 
          adult: m.adult 
        })));
        
        setGenres(genresData);
        setAllMovies(moviesData);
        applyFilters(moviesData, selectedGenre, minRating);
      } catch (error) {
        console.error('Error fetching initial data:', error);
        setGenres([]);
        setAllMovies([]);
        setDisplayedMovies([]);
      }
    };
    
    fetchInitialData();
  }, [showAdult, selectedGenre, minRating]);

  useEffect(() => {
    applyFilters(allMovies, selectedGenre, minRating);
  }, [allMovies, selectedGenre, minRating, showAdult]);  const applyFilters = (movies, genre, rating) => {
    console.log('Applying filters:', {
      totalMovies: movies.length,
      genre,
      rating,
      showAdult
    });

    const filtered = movies.filter((movie) => {
      const genreMatch = !genre || movie.genre_ids.includes(Number(genre));
      const ratingMatch = movie.vote_average >= rating;
      // We don't need to filter adult content here as it's handled in the API
      return genreMatch && ratingMatch;
    });

    console.log('Filtered movies count:', filtered.length);
    console.log('Sample filtered:', filtered.slice(0, 3).map(m => ({
      title: m.title,
      adult: m.adult,
      rating: m.vote_average
    })));

    setDisplayedMovies(filtered);
  };
  const handleSearch = async (query) => {
    console.log('Searching with query:', query, 'showAdult:', showAdult);
    let results = [];

    if (!query.trim()) {
      results = await fetchPopularMovies(showAdult);
    } else {
      results = await searchMovies(query, showAdult);
    }

    console.log('Search results count:', results.length);
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
      
      {/* Hero Section */}      <Box
        sx={{
          height: '85vh',
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
            filter: 'brightness(0.5) saturate(1.2)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'scale(1.05)',
            animation: 'kenBurns 20s infinite alternate',
            '@keyframes kenBurns': {
              '0%': {
                transform: 'scale(1.05)',
              },
              '100%': {
                transform: 'scale(1.15)',
              },
            },
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.4) 100%)',
            pointerEvents: 'none',
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
        >          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              maxWidth: '800px'
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 900,
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                animation: 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.8) 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(40px)',
                    filter: 'blur(10px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                    filter: 'blur(0)',
                  },
                },
              }}
            >
              Welcome to MovieInsider
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '600px',
                fontWeight: 500,
                lineHeight: 1.4,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                animation: 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
                animationFillMode: 'both',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '-20px',
                  top: '50%',
                  width: '4px',
                  height: '40%',
                  transform: 'translateY(-50%)',
                  background: 'linear-gradient(180deg, #E50914, transparent)',
                  borderRadius: '4px',
                },
              }}
            >
              Discover amazing movies and explore your favorite genres
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                animation: 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
                animationFillMode: 'both',
              }}
            >
              {displayedMovies[0] && (
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    maxWidth: '500px',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  {displayedMovies[0].overview}
                </Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>      
      <FilterBar
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
