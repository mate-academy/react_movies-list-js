import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(e => (
      <MovieCard key={e.imdbId} movie={e} />
    ))}
  </div>
);
