import React from 'react';
import { MovieList } from './components/MovieList';

export const App = () => {
  const moviesFromServer = [
    {
      imdbId: 'tt0133093',
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of reality.',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BM.jpg',
      imdbUrl: 'https://www.imdb.com/title/tt0133093/',
    },
    {
      imdbId: 'tt0468569',
      title: 'The Dark Knight',
      description: 'Batman faces the Joker in Gotham City.',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BN.jpg',
      imdbUrl: 'https://www.imdb.com/title/tt0468569/',
    },
    {
      imdbId: 'tt0109830',
      title: 'Forrest Gump',
      description: 'The story of a man with a kind heart who witnesses history.',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BO.jpg',
      imdbUrl: 'https://www.imdb.com/title/tt0109830/',
    },
    {
      imdbId: 'tt0120737',
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description: 'A hobbit embarks on a quest to destroy the One Ring.',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BP.jpg',
      imdbUrl: 'https://www.imdb.com/title/tt0120737/',
    },
    {
      imdbId: 'tt1375666',
      title: 'Inception',
      description: 'A thief enters dreams to steal secrets.',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BQ.jpg',
      imdbUrl: 'https://www.imdb.com/title/tt1375666/',
    },
  ];

  return (
    <div className="App">
      <h1 data-cy="Title">Movies List</h1>
      <aside data-cy="Sidebar">Sidebar will be here</aside>
      <MovieList movies={moviesFromServer} />
    </div>
  );
};
