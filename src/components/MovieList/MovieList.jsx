import './MovieList.scss';

import movies from '../../api/movies.json';

import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => (
  <div className="movie-list">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
);

export default MovieList;
