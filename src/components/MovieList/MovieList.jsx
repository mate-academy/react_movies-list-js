import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li>

        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      </li>
    ))}
  </ul>
);
