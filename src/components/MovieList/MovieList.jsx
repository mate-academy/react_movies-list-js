import './MovieList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);

export default MovieList;
