import './MovieList.scss';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MovieList = () => (
  <div className="movies">
    {moviesFromServer.length === 0 && (
      null
    )}
    {moviesFromServer.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
