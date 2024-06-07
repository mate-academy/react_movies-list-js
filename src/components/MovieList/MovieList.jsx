import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
);
