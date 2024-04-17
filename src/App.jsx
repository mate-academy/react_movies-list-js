/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import movie from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movie} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
