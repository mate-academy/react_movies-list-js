import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
}
