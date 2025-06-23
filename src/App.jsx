import { MovieList } from './components/MovieList';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      {/* conteúdo da sidebar */}
    </div>
  </div>
);
