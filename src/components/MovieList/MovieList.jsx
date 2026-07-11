import './MovieList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(Movie => (
      <MovieCard key={Movie.imdbId} movie={Movie} />
    ))}
  </div>
);
