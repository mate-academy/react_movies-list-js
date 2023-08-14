import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies?.map(movie => (
      <MovieCard movie={movie} data-cy="Movie" />
    ))}
  </div>
);
