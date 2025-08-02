import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
