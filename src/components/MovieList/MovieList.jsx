import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ data }) => (
  <div className="movies">
    {data && data.map(elem => (
      <MovieCard card={elem} key={elem.imdbId} />
    ))}
  </div>
);
