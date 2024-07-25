import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = props => {
  return (
    <div className="movies">
      {props.movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
