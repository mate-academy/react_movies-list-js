import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="movie" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
