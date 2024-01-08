/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList';
import movies from './api/movies.json';
// import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <MovieList movies={movies} />

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
