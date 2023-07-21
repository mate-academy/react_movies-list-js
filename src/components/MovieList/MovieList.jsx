import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  const moviesExist = movies.length > 0;

  return (
    <div className="movies">
      {moviesExist ? (
        movies.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))
      ) : (
        <div>No movies available</div>
      )}
    </div>
  );
};
