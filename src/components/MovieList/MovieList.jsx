import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard movie={film} />
    ))}
  </div>
);
