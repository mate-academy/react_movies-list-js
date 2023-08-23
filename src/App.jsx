import './App.scss';
import { MovieList } from './components/MovieList';
import { Sidebar } from './components/Sidebar/Sidebar';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>

    <Sidebar />
  </div>
);
