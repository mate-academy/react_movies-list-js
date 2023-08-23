import './App.scss';
import moviesFromServer from './api/movies.json';
import { Movelist } from './components/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <Movelist movies={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
