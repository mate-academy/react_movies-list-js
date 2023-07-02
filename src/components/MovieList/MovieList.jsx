import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <ul className="movies">
    { movies.map(movieItem => (
      <MovieCard movie={movieItem} key={movieItem.imdbId} />
    ))}
  </ul>
);
