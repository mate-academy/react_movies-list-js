import './App.scss';
import { MovieList } from './components/MovieList';
import movies from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content" data-cy="MovieListContent">
      <MovieList movies={movies} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
