import { MovieCard } from '../MovieCard/index';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies" data-cy="moviesList">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
