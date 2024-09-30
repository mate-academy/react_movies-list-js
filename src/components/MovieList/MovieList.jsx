import './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
}
