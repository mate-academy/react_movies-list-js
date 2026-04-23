/* eslint-disable max-len */

import './App.scss';
// import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

const moviesFromServer = [ 
  { 
    imdbId: "tt1375666",
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    imdbUrl: 'https://www.imdb.com/title/tt1375666',
  },
  {
    imdbId: "tt0314331",
    title: "Love Actually",
    description: "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    imdbUrl: 'https://www.imdb.com/title/tt0314331',
  },
  {
    imdbId: "tt0816692",
    title: "Interstellar",
    description: "A former NASA pilot joins a mission through a wormhole to find a new home for humanity.",
    imgUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    imdbUrl: "https://www.imdb.com/title/tt0816692",
  },
  {
    imdbId: "tt0172495",
    title: "Gladiator",
    description: "A betrayed Roman general fights as a gladiator to seek revenge against the corrupt emperor.",
    imgUrl: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    imdbUrl: "https://www.imdb.com/title/tt0172495",
  },
  {
    imdbId: "tt0468569",
    title: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    imdbUrl: "https://www.imdb.com/title/tt0468569",
  },
]


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
