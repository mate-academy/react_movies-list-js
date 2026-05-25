import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
}
