/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  return <MovieList movies={moviesFromServer} />;
};
