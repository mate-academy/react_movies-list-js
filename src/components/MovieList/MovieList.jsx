import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

import './MovieList.scss';

export const MovieList = () => <>
  <div className="movies" data-cy="movieList">
    {moviesFromServer.map(card => (
      <MovieCard card={card} key={card.imdbId}/>
    ))}
  </div>
</>;
