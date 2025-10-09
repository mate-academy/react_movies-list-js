import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map(movie => (
      <div key={movie.imdbId} className="movie-list__item" data-cy="Movie">
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);

export default MovieList;
