import './MovieList.scss';
import movies from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = () =>
  movies.map(movie => <MovieCard props={movie} key={movie.imdbId} />);
