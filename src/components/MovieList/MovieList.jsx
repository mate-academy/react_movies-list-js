import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="movies">
      <ul className="movie__list">
        {movies.map(movie => (
          <li className="movies__item" key={movie.imdbId}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};
