import { MovieList } from './components/MovieList';
import movies from './api/movies.json';
import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movies} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
