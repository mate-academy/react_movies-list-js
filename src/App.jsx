/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';

export const App = () => (
  <MovieList movies={moviesFromServer} />
);
