import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map(mov => (
        <MovieCard key={mov.imdbId} movie={mov} />
      ))}
    </div>
  );
}
