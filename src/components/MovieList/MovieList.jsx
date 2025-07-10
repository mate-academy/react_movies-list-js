import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movieFromServer => (
      <MovieCard
        movieFromServer={movieFromServer}
        key={movieFromServer.imdbI}
      />
    ))}
  </div>
);
