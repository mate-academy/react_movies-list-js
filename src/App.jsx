import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';

export const App = () => {
  return (
    <div className="page">
      <div className="page-content">
        <MovieList movies={moviesFromServer} />
        <div className="sidebar" data-cy="Sidebar">
          Sidebar will be here
        </div>
      </div>
    </div>
  );
};
