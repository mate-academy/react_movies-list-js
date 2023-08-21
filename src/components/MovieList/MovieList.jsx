import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.length > 0 && movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </>
);
