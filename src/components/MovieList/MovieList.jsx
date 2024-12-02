import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.length > 0 &&
      movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)}
  </div>
);
