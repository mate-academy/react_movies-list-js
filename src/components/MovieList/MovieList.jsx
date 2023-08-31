import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    { moviesFromServer.length !== 0 && (
      moviesFromServer.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      )))
    }
  </div>
);
