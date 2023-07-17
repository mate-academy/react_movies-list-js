import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.length > 0 && movies.map(movie => (
      <MovieCard movie={movie} key={movie.ImdbId} />
    ))}
  </div>
);
