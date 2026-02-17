import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="page-content">
      <div className="movies">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))}
      </div>
    </div>
  );
};
