import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="movies">
      {sorted.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
