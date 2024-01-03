import './App.scss';

import { MovieList } from './components/MovieList';
import MoviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={MoviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
