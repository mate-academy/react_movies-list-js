import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
