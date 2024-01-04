import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = (moviesList) => {
  const { movieList } = moviesList;

  return (
    <div className="movies">
      {movieList.map(movie => <MovieCard movie={movie} />)}
    </div>
  );
};
