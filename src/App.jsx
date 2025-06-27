/* eslint-disable max-len */
import './App.scss';
import { MovieList } from './components/MovieList/MovieList';

const moviesFromServer = [
  {
    imdbId: '1',
    title: 'Inception',
    description: 'Inception description',
    imgUrl: 'some-image-url',
    imdbUrl: 'https://www.imdb.com/title/tt1375666',
  },
  {
    imdbId: '2',
    title: 'Love Actually',
    description: 'Love Actually description',
    imgUrl: 'some-image-url',
    imdbUrl: 'https://www.imdb.com/title/tt0314331',
  },
  {
    imdbId: '3',
    title: 'Movie 3',
    description: 'Movie 3 description',
    imgUrl: 'some-image-url',
    imdbUrl: 'https://www.imdb.com/title/tt0314331',
  },
  {
    imdbId: '4',
    title: 'Movie 4',
    description: 'Movie 4 description',
    imgUrl: 'some-image-url',
    imdbUrl: 'https://www.imdb.com/title/tt0314331',
  },
  {
    imdbId: '5',
    title: 'Movie 5',
    description: 'Movie 5 description',
    imgUrl: 'some-image-url',
    imdbUrl: 'https://www.imdb.com/title/tt0314331',
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
