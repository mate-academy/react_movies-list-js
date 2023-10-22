import './MovieList.scss';
// import mooviesFilm from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.length > 0 ? (
      <div className="movies">
        {movies.map(moviess => (
          <MovieCard
            movie={moviess}
            key={moviess.imdbId}
          />
        ))}
      </div>
    ) : null}
  </>
);
