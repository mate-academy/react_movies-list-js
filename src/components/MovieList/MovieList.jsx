import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  const { imdbId } = movies;

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={imdbId} />
      ))}
    </div>
  );
};
