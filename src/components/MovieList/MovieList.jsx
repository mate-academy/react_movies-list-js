import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  movies ? (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  ) : ''
);
