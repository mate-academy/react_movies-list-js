import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';


export const MovieList = () => (
   <div className="page">
    <div className="page-content">
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  </div>
);
