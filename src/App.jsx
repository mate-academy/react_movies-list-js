/* eslint-disablen}   {moveis.imgUrl} max-len */
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieCard } from './components/MovieCard';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {moviesFromServer.map(movies => (
          <MovieCard key={movies.id} movies={movies} />
        ))}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);

export default App;
