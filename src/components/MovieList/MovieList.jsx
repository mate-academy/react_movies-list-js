import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div className="movies" key={movie.imdbId} data-cy="Movie">
        <MovieCard movie={movie} />
      </div>
    ))}
  </>
);
