import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  movies.map(movie => (
    <div key={movie.imdbId} className="movies">
      <MovieCard movie={movie} />
    </div>
  ))
);
