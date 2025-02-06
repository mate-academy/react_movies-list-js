import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <div className="movies" key={movie.imdbId}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </>
  );
};
