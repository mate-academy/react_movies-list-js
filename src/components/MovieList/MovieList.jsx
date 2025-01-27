import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies-list">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
