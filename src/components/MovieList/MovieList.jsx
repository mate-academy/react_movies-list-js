import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ moviesData }) => (
  <div className="movies">
    {moviesData.map(movieInfo => (
      <MovieCard movieInfo={movieInfo} key={movieInfo.imdbId} />
    ))}
  </div>
);
