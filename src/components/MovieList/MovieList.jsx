import './MovieList.scss';

//export const MovieList = () => <>Put the list here</>;
import './MovieCard.scss';
import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

const moviesFromServer = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'Interstellar', year: 2014 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
];

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        imageSrc={movie.imageSrc}
        title={movie.title}
        description={movie.description}
        imdbLink={movie.imdbLink}
      />
    ))}
  </div>
);
export default MovieList;