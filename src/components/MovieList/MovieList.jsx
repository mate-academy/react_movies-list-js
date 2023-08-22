import { MovieCard } from '../MovieCard';
import moviesFromServer from '../../api/movies.json';

import './MovieList.scss';

export const MovieList = () => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
