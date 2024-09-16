import { MovieCard } from '../MovieCard';

import './MovieList.scss';

export const MovieList = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </ul>
  );
};
