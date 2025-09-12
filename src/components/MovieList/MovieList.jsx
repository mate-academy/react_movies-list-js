import { MovieCard } from '../MovieCard/index';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <ul className="Movie List">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </ul>
);
