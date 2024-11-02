/* eslint-disable max-len */
import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <>
      <div className="movies">
        {movies.map(item => (
          <MovieCard movie={item} key={item.imdbId} />
        ))}
      </div>
    </>
  );
};
