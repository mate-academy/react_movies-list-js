import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div>
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  </div>
);
