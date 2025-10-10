import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export function MovieList({ movies }) {
  return (
    <div className="movies">
      {[...movies].map((movie) => {
        return <MovieCard movie={movie} key={movie.imdbId} />;
      })}
    </div>
  );
}
