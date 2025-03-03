import { MovieCard } from '../MovieCard';

import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => {
      return <MovieCard movie={movie} key={movie.imdbId} />;
    })}
  </ul>
);
