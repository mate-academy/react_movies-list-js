import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {Object.keys(movies).length > 0 && movies.map(movie => (
      <MovieCard
        movie={movie}
        key={movie.imdbId}
      />
    ))}
  </div>

);
