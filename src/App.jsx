/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <>
    <div data-cy="Sidebar">Sidebar will be here</div>
    <MovieList movies={moviesFromServer} />
  </>
);
