/* eslint-disable max-len */

import './App.scss';
import movies from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movies} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
