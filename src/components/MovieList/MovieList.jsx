import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies" data-cy="MoviesList">
    {movies.length > 0 ? (
      movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)
    ) : (
      <p>No movies</p>
    )}
  </div>
);
