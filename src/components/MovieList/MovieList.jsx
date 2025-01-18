import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesList }) => {
  return (
    <div className="movies">
      {moviesList && moviesList.map(movie => <MovieCard movie={movie} />)}
    </div>
  );
};
