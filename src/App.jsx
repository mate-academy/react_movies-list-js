/* eslint-disable max-len */
import { MovieList } from './components/MovieList/MovieList';
import './App.scss';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MovieList movies={moviesFromServer} />
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
