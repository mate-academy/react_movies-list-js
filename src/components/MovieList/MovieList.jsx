import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)}
  </ul>
);
