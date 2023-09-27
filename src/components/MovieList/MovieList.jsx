import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movieList }) => (
  <>
    {movieList ? (
      <div className="movies">
        {movieList.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))}
      </div>
    ) : ''}
  </>
);
