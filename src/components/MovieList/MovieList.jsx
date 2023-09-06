import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movieFromServer => (
      <MovieCard
        movie={movieFromServer}
        key={movieFromServer.imdbId}
      />
    ))}
  </div>
);

export default MovieList;
