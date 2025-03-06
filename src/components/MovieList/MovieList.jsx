import { MovieCard } from '../MovieCard/MovieCard';
// import moviesFromServer from '../../api/movies.json';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
