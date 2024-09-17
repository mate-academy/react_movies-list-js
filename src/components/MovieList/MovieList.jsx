import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movieCard => (
      <MovieCard movie={movieCard} key={movieCard.imdbId} />
    ))}
  </div>
);
