import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movieList => (
      <MovieCard movieList={movieList} key={moviesFromServer.imdbId} />
    ))}
  </div>
);
