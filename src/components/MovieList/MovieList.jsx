import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.length > 0 ? (
      movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)
    ) : (
      <p>No movies available</p>
    )}
  </div>
);
