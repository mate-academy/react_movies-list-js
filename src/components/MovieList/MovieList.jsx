import './MovieList.scss';
// import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}

  </div>
);
