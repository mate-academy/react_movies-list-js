import movies from './api/movies.json';
import './App.scss';
import { MovieList } from './components/MovieList';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movies} />
    </div>
    <Sidebar />
  </div>
);
