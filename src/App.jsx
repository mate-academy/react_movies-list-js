import movieList from './api/movies.json';
import './App.scss';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movieList} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
