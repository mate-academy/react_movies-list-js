import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies && movies.length > 0
      ? movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)
      : null}
  </div>
);
