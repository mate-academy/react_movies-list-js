import moovies from './api/movies.json';
import { MovieList } from './components/MovieList';
import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moovies} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
