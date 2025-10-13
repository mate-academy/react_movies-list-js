import './MovieList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';


export const MovieList = ({movies}) => {
  return (
     <div className='movies'>
      {movies.map(movie=>{
        return
        <MovieCard
        key={movie.imdbId}
        movie={movie}/>
      })}

     </div>
  )
}

