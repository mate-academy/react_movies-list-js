/* eslint-disable max-len */

import './App.scss';
import movies from './api/movies.json';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="page">
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
    <MovieList movies={movies} />
  </div>
);
