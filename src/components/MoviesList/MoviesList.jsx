import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies available.</div>;
  }

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};
