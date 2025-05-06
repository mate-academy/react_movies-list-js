import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard movie={movie} data-cy={movie.imdbId} />
    ))}
  </>
);
