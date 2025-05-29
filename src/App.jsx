/* eslint-disable max-len */

import './App.scss';
import moviesfromServer from './api/movies.json';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesfromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
