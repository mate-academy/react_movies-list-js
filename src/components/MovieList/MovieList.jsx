import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = (props) => {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)}
    </div>
  );
};
