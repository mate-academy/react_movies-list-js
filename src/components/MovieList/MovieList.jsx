import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="moviesFromServer">
    {movies.map(movie => (
      <div className="MovieCard">
        <MovieCard movie={movie} key={movie.imdbId} />
      </div>
    ))}
  </div>
);
