import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.length === 0 ? (
      <p>There are no movies</p>
    ) : (
      movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)
    )}
  </div>
);
