import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

// eslint-disable-next-line no-shadow
export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
