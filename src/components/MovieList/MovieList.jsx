import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies: moviesFromServer }) => {
  return (
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
