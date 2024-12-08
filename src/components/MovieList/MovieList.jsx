import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';
/* eslint-disable */

export const MovieList = ({ movies = [] }) => {
  console.log(movies);

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
