import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="page-content">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
