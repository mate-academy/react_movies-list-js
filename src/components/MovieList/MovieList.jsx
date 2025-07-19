import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
