/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

export const App = () => (
  <div className="page">
    <aside className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </aside>

    <MovieList movies={moviesFromServer} />
  </div>
);
