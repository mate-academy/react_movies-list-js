import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    movies.length !== 0 && (
      <div className="movies">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))}
      </div>
    )
  );
};
