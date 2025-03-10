import { MovieCard } from '../MovieCard';
import './MovieList.scss';
import moviesFromServer from '../../api/movies.json';

export const MovieList = () => (
  <div className="movies">
    {moviesFromServer.length > 0 &&
      moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
  </div>
);
