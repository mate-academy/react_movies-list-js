import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(mov => (
      <MovieCard
        movie={mov}
        key={mov.imdbId}
      />
    ))}
  </div>
);
