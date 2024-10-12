import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};
