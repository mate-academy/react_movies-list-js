import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li
        key={movie.imdbId}
        className="card"
        data-cy="Movie"
      >
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
