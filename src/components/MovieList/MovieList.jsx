import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <li
        key={movie.imdbId}
        style={{ listStyle: 'none' }}
      >
        <MovieCard movie={movie} />
      </li>

    ))}
  </div>
);
