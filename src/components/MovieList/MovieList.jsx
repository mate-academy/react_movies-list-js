import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(el => (
      <MovieCard movie={el} key={el.imdbId} />
    ))}
  </div>
);
