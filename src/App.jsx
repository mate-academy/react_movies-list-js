import movies from './api/movies.json';
import { MovieList } from './components/MovieList';

import './App.scss';

export const App = () => <MovieList movies={movies} />;
