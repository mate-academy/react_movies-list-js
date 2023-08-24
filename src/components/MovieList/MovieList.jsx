import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ list }) => (
  <div className="movies">
    {list.map(movie => (<MovieCard key={movie.imdbId} movie={movie} />))}
  </div>
);
