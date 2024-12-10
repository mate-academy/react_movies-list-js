import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import moviesFromServer from '../../api/movies.json';

export const MovieList = ({ movies: moviesFromProps = moviesFromServer }) => (
  <div className="movies">
    {moviesFromProps.length === 0 ? (
      <p data-cy="NoMoviesMessage">No movies available</p>
    ) : (
      moviesFromProps.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))
    )}
  </div>
);
