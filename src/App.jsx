/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList';
import moviesFromServer from './api/movies.json';
// import moviesFromServer from './api/movies.json';

export const App = () => (
  <MovieList movies={moviesFromServer} />
);
