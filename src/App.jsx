/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="page">
    <h1 className="page__title">Movie List</h1>
    <div className="page__content">
      <MovieList movies={moviesFromServer} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
