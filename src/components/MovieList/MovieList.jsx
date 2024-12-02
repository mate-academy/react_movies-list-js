import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};
