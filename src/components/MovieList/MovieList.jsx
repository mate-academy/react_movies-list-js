import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.length
      ? movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)
      : ''}
  </div>
);
