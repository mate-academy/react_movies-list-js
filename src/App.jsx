/* eslint-disable max-len */
import { MoviesList } from './components/MovieList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
