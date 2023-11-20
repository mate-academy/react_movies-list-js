import './PageContent.scss';
import moviesFromServer from '../../api/movies.json';
import { MovieList } from '../MovieList';

export const PageContent = () => (
  <div className="page-content">
    <MovieList movies={moviesFromServer} />
  </div>
);
