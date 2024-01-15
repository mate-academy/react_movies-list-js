/* eslint-disable max-len */
import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  const list = movies.map(movie => (
    <MovieCard movie={movie} />
  ));

  return (
    <div className="movies">
      { list }
    </div>
  );
};
