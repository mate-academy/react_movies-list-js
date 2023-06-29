import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="MovieList movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movies.imdbId} />
    ))}
  </div>
);
