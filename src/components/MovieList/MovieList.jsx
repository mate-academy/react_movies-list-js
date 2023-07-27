import './MovieList.scss';

import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ movies }) => (
  <div className="page-content">
    {movies.map(movie => (
      <div className="movies" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);

export default MoviesList;
