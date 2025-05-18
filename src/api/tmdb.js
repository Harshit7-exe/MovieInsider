const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (includeAdult = false) => {
  try {
    console.log('Fetching movies with includeAdult:', includeAdult);
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&include_adult=${includeAdult}`);
    const data = await res.json();
    const movies = includeAdult ? data.results : data.results.filter(movie => !movie.adult);
    console.log('API Response after filtering:', movies.map(movie => ({
      title: movie.title,
      adult: movie.adult,
      included: includeAdult || !movie.adult
    })));
    return movies;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const fetchGenres = async () => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();
  return data.genres; // [{id: 28, name: 'Action'}, ...]
};

export const searchMovies = async (query, includeAdult = false) => {
  try {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=${includeAdult}`);
    const data = await res.json();
    const movies = includeAdult ? data.results : data.results.filter(movie => !movie.adult);
    console.log('Search Response after filtering:', movies.map(movie => ({
      title: movie.title,
      adult: movie.adult,
      included: includeAdult || !movie.adult
    })));
    return movies;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
