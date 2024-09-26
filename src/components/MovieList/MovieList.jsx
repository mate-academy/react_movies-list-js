import './MovieList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div key={movie.imdbId} className="movies">
        <MovieCard movie={movie} />
      </div>
    ))}
  </>
);
