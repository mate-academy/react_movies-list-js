import { MovieCard } from '../MovieCard';
import './MovieList.scss';
import movies from '../../api/movies.json';

export const MovieList = () => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return null;
  }

  return (
    <div className="movies" data-cy="Movies">
      {movies.map(movie => {
        return (
          <MovieCard
            movie={movie}
            key={movie.imdbId}
          />
        )
      })}
    </div>
  );
};

