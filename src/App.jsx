import { MovieList } from './components/MovieList';
import './App.scss';
import movies from './api/movies.json';

export const App = () => (
  <div className="page">
    <MovieList movies={movies} />

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
