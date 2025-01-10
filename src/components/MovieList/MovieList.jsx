import './MovieList.scss';
import { MovieCard } from '../MovieCard/index';

export const MovieList = ({ movies }) => (
  <div className="movies" data-cy="MoviesList">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
