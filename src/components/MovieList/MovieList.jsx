import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movieItem => (
      <MovieCard movieItem={movieItem} key={movieItem.imdbId} />
    ))}
  </div>
);
