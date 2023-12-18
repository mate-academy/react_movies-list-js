import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </>
);
