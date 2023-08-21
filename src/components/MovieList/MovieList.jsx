import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  const moviesList = movies.map(movie => (
    <MovieCard movie={movie} key={movie.imdbId} />
  ));

  return (
    <div className="movies">
      { moviesList }
    </div>
  );
};
