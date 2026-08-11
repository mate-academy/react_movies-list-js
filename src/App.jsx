/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList/MovieList';

import * as moviesData from './api/movies.json';

const moviesFromServer = moviesData.default;

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
