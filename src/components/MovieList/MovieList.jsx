// MovieList.jsx
import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div data-cy="Movie" key={movie.imdbId}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};
