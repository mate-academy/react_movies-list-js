/* eslint-disable max-len */
import './App.scss';
import MoviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';

// import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <MovieList movies={MoviesFromServer} />

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
