import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard className="card" movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
