/* eslint-disable max-len */

import './App.scss';

import { MovieList } from './components/MovieList/MovieList';
import moviesFromApi from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MovieList movies={moviesFromApi} />
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
