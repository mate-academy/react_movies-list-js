import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const Movelist = ({ movies }) => {
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movies={movie} key={movie.imdbid} />
    ))}
  </div>;
};
