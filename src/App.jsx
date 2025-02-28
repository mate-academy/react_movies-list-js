/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import MovieList from './MovieList';

// import moviesFromServer from './api/movies.json';

const moviesFromServer = [
  { imdbId: 'tt0111161', title: 'The Shawshank Redemption', year: 1994 },
  { imdbId: 'tt0068646', title: 'The Godfather', year: 1972 },
  { imdbId: 'tt0071562', title: 'The Godfather: Part II', year: 1974 },
  // Add more movie objects as needed
];

function App() {
  return (
    <div className="App">
      <MovieList movies={moviesFromServer} />
    </div>
  );
}

export default App;
