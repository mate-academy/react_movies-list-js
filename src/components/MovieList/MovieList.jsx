import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.imdbUrl}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
