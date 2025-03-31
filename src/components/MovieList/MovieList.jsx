import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.length
      ? movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)
      : 'no movies'}
  </div>
);
