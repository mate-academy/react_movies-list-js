import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    <div className="page">
      <div className="page-content">
        <div className="movies">
          {movies && movies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbId} />
          ))}
        </div>
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  </>
);
