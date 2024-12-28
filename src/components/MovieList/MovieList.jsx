/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({movies}) => (
<>
{movies.map(movie => (
  <MovieCard movie= {movie} key= {movie.imdbId} />
))}
</>
);
