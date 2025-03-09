import './MovieList.scss';
import movies from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = () => (
  <div className="movies">
    {movies.length > 0 &&
      movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)}
  </div>
);
