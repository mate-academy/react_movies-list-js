import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(moviesItem => (
      <MovieCard movie={moviesItem} key={moviesItem.imdbId} />
    ))}
  </div>
);
