import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer !== undefined
      ? moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />))
      : null
    }
  </div>
);
