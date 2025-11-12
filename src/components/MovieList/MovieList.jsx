import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(moviesItem => (
      <MovieCard key={moviesItem.imdbId} movie={moviesItem} />
    ))}
  </div>
);
