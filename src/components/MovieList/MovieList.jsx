import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movie }) => {
  return (
    <div className="movies">
      {movie.map(mov => (
        <MovieCard key={mov.imdbId} movie={mov} />
      ))}
    </div>
  );
};
