import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies" data-cy="MoviesList">
      {movies.map(movie => (
        <div key={movie.imdbId}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};