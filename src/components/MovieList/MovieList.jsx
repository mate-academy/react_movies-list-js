import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(b => (
      <MovieCard movie={b} key={b.imdbId} />
    ))}
  </div>
);
