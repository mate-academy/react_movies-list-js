import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  const preparedMovies = movies.map(movie => (
    <MovieCard movie={movie} key={movie.imdbId} />
  ));

  return <div className="movies">{preparedMovies}</div>;
};
