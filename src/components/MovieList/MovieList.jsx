import { MovieCard } from '../MovieCard/MovieCard';
// import './MovieList.scss';
//
export const MovieList = ({ movies }) => (
  <>
    {movies.map(m => (
      <MovieCard key={m.imdbId} movie={m} />
    ))}
  </>
);
