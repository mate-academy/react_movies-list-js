/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList';

// import moviesFromServer from './api/movies.json';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList moviesFromServer={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
