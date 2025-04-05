import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesFromServer }) => {
  return (
    <>
      {moviesFromServer.map(movie => (
        <div key={movie.imdbId} className="movies">
          <MovieCard movie={movie} />
        </div>
      ))}
    </>
  );
};
