/* eslint-disable max-len */
import { MovieList } from './components/MovieList/MovieList';
import './App.scss';
// import moviesFromServer from './api/movies.json';

const moviesFromServer = [
  {
    imdbId: 'tt1375666',
    title: 'Inception',
    description:
      'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
    imdbUrl: 'https://www.imdb.com/title/tt1375666',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },

  {
    imdbId: 'tt0314331',
    title: 'Love Actually',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imdbUrl: 'https://www.imdb.com/title/tt0314331',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg',
  },

  {
    imdbId: 'tt0816692',
    title: 'Interstellar',
    description:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
    imdbUrl: 'https://www.imdb.com/title/tt0816692',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktM2NhMC00ZGE1LTg4MzMtYzM1ZjBkYjhiY2RhXkEyXkFqcGc@._V1_SX300.jpg',
  },
  {
    imdbId: 'tt5013056',
    title: 'Dunkirk',
    description:
      'Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.',
    imdbUrl: 'https://www.imdb.com/title/tt5013056',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjA0MjgxNjc3N15BMl5BanBnXkFtZTgwNjQ0NjYyMjI@._V1_SX300.jpg',
  },
  {
    imdbId: 'tt6723592',
    title: 'Tenet',
    description:
      'Armed with only one word, Tenet, and fighting for the survival of the entire world, a protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    imdbUrl: 'https://www.imdb.com/title/tt6723592',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjA2YjliZTItZjVkNC00Y2U5LTk4YzgtYzUwYjQzM2YxODZjXkEyXkFqcGc@._V1_SX300.jpg',
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
