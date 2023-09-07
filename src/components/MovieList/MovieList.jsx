import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="page-content">
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  </div>
);
