import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <>
    <div className="movies">
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbId}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  </>
);
