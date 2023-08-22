import { MovieCard } from '../MovieCard';
import './MovieList.scss';

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
