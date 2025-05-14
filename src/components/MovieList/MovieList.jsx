import { MovieCard } from '../MovieCard/MovieCard';
import movies from '../../api/movies.json';
import './MovieList.scss';

export const MovieList = () => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
