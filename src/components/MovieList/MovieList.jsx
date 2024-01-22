import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movies.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
