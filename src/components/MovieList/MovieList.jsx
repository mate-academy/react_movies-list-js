import { MovieCard } from '../MovieCard';
import './MovieList.scss';
import moviesFromServer from '../../api/movies.json';

export const MovieList = () => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
