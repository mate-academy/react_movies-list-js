import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
        // title={movie.title}
        // description={movie.description}
        // image={movie.image}
        // imdb={movie.imdb}
      />
    ))}
  </div>
);

// import { Navigation } from '../Navigation/Navigation';
