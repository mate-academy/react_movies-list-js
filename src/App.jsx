/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

export const App = () => (
  <>
    <MovieList movies={moviesFromServer} />
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </>
);
