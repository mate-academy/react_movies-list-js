import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  const moviesLength =
    movies.length === 0
      ? null
      : movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />);

  return <div className="movies">{moviesLength}</div>;
};
