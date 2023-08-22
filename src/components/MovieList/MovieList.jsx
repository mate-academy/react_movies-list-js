import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MoviesList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
