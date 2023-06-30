import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movies => (
      <MovieCard
        key={movies.imdbId}
        movies={movies}
      />
    ))}
  </div>
);
