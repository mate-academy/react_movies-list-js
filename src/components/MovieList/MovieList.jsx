import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(singleMovie => (
        <MovieCard movie={singleMovie} key={singleMovie.imdbId} />
      ))}
    </div>
  );
};
