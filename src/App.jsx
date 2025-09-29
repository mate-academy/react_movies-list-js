/* eslint-disable max-len */

import './App.scss';
// import moviesFromServer from './api/movies.json';
import React from 'react';
import { MovieList } from './components/MovieList/MovieList';

const moviesFromServer = [
  {
    imdbId: 'tt1375666',
    imageSrc: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    title: 'Inception',
    description: 'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
    imdbLink: 'https://www.imdb.com/title/tt1375666',
  },
  {
    imdbId: 'tt0314331',
    imageSrc: 'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg',
    title: 'Love Actually',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imdbLink: 'https://www.imdb.com/title/tt0314331',
  },
];

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);