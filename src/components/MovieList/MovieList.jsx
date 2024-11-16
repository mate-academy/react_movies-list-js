import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} id={movie.imbId} />
      ))}
    </div>
  );
};
