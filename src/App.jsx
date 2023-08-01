import { MovieList } from './components/MovieList';
import { Sidebar } from './components/Sidebar';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>

    <Sidebar />
  </div>
);
