import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
        // title={movie.title}
        // description={movie.description}
        // imgUrl={movie.imgUrl}
        // imdbUrl={movie.imdbUrl}
      />
    ))}
  </div>
);
