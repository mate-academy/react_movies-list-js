import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies" data-cy="MovieList">
    {movies.map(elemt => (
      <MovieCard
        key={elemt.imdbId}
        title={elemt.title}
        description={elemt.description}
        imgUrl={elemt.imgUrl}
        imdbUrl={elemt.imdbUrl}
      />
    ))}
  </div>
);
