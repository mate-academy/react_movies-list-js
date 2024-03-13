import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => {
  return movies.map(movie => (
    <MovieCard
      movieTitle={movie.title}
      movieDescription={movie.description}
      movieLink={movie.imdbUrl}
      movieImage={movie.imgUrl}
      key={movie.imdbId}
    />
  ));
};
