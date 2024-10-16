import './App.scss';
import moviesData from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesData} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);

export default App;
