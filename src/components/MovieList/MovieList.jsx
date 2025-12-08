import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies" data-cy="MovieList">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
