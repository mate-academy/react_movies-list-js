import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbUrl}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
