/* eslint-disable max-len */
import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(({ title, description, imgUrl, imdbUrl, imdbId }) => (
      <MovieCard
        key={imdbId}
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
      />
    ))}
  </div>
);
