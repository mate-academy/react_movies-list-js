import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.map((movie, index) => (
      <MovieCard key={movie.imdbId || index} movie={movie} numFilm={index} />
    ))}
  </>
);
