import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
}
