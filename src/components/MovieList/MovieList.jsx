import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="page-content">
    <div className="movies">
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbId}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
