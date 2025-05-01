import './MovieList.scss';
import { MovieCard } from '../MovieCard'; // або './MovieCard', залежно від структури

export const MovieList = ({ movies }) => (
  <div className="movies" data-cy="movieList">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
