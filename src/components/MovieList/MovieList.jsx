import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movieData => (
      <MovieCard key={movieData.imdbId} movie={movieData} />
    ))}
  </div>
);
