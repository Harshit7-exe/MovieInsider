import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from "./pages/Home";
import { theme } from './theme/theme';
import {fetchPopularMovie} from './api/tmdb';
fetchPopularMovie();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}


export default App;
