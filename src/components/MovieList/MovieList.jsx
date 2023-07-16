import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      !movie
        ? (
          <p style={{ paddingBlock: '50%' }}>
            No information about this movie.
          </p>
        )
        : <MovieCard movie={movie} key={movie.ImdbId} />
    ))}
  </div>
);
