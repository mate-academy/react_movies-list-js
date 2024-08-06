import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

export default function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
}
