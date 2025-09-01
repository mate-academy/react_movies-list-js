import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    { movies.map(film => (
      <MovieCard movie = { film } key = { film.imdbId } />
    ))}
  </div>
);
