import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <div className="MoviesList">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
