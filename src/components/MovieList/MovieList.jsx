/* eslint-disable function-paren-newline */
import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  const sortedMovies = [...movies].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <div className="movies">
      {sortedMovies.length === 0 ? (
        <p>No movies available</p>
      ) : (
        sortedMovies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} data-cy="Movie" />
        ))
      )}
    </div>
  );
};
