import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  const preparedMovies = movies.map(movie => (
    <MovieCard key={movie.imdbId} movie={movie} />
  ));

  return <div className="movies">{preparedMovies}</div>;
};
