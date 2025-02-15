import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  const theList = movies.map(movie => (
    <MovieCard movie={movie} key={movie.imdbId} />
  ));

  return <div className="movies">{theList}</div>;
};
