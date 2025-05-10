import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </>
  );
};
