import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);
