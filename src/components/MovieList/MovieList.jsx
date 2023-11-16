import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  movies.map(movie => (
    <div className="movies">
      <MovieCard movie={movie} key={movie.imdbId} />
    </div>
  ))
);
