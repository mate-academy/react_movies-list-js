import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </>
);
