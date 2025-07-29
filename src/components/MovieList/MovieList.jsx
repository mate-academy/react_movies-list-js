import { MovieCard } from '../MovieCard';
import './MovieList.scss';

const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);

export { MovieList };
