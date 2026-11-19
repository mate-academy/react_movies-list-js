import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export function MovieList({ movies }) {
  return (
    <div className="movies" data-cy="MoviesList">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
}
