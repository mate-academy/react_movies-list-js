import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="page-content">
      <div className="movies">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))}
      </div>
    </div>
  );
};
