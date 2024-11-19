import movies from './api/movies.json';
import { MovieList } from './components/MovieList';
import './App.scss';


export const App = () => (
  <div className="page">
    <div className="page-content">
      {' '}
      <div className="App">
        <h1>Movies List</h1>
        <MovieList movies={movies} />
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
