import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {/* eslint-disable-next-line prettier/prettier */}
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
