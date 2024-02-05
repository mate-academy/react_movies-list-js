/* eslint-disable max-len */
import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => (
  <>
    <div className="movies">
      {moviesFromServer.length === null ? (
        <p>not.exist</p>
      ) : (
        moviesFromServer.map(movie => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))
      )}
    </div>
  </>
);
