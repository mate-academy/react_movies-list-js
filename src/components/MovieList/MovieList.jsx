import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <div id={movie.imdbId}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};
