import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    <div className="page">
      <div className="page-content">
        <ul className="movies">
          {movies && movies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbId} />
          ))}
        </ul>
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  </>
);
