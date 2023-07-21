import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.length > 0
      && movies.map(movie => (
        <div className="card" data-cy="Movie" key={movie.imdbId}>
          <MovieCard movie={movie} />
        </div>
      ))}
  </div>
);
