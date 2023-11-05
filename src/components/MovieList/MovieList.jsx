import { MovieCard } from '../MovieCard';
import './MovieList.scss';
// import moviesFromServer from '../../api/movies.json';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
