import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.map(movie => {
      return <MovieCard key={movie.imdbId} movie={movie} />;
    })}
  </>
);
