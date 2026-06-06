import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map(movie => (
      <MovieCard
       key={movie.imdbId}
       movie={movie} />
    ))}
  </div>
);
