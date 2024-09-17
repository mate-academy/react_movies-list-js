/* eslint-disable max-len */
import moviesFromServer from './api/movies.json';

import { MovieList } from './components/MovieList/MovieList';

import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MovieList movies={moviesFromServer} />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  </div>
);
