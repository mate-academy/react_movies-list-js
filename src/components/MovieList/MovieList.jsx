import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movieFromServer => (
      <MovieCard
        movie={movieFromServer}
        key={movieFromServer.imdbId}
      />
    ))}
  </div>
);
