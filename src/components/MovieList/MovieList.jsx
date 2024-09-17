import './MovieList.scss';
import { MovieCard } from '../MovieCard';
// import movies from '../../api/movies.json';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
