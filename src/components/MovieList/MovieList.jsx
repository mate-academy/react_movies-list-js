import './MovieList.scss';
import moviesFromServer from './api/movies.json';
import { MovieCard } from './components/MovieCard';

export const MovieList = () => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard movies={movie} key={movie.imdbId} />
    ))}
  </div>
);
