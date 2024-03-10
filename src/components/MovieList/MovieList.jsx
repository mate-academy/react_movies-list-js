import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    <div className="movies">
      {movies.length !== 0 && (
        <MovieCard movie={movies[0]} key={movies[0].imdbId} />
      )}
      {movies.length !== 0 && (
        <MovieCard movie={movies[1]} key={movies[1].imdbId} />
      )}
      {movies.length !== 0 && (
        <MovieCard movie={movies[2]} key={movies[2].imdbId} />
      )}
      {movies.length !== 0 && (
        <MovieCard movie={movies[3]} key={movies[3].imdbId} />
      )}
      {movies.length !== 0 && (
        <MovieCard movie={movies[4]} key={movies[4].imdbId} />
      )}
    </div>
  </>
);
