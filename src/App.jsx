/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import {MovieList} from './components/MovieList/MovieList'

export const App = () => {
  return(
    <>
    <div className='page' data-cy="App">
      <div className='page-cotent'>
        <MovieList movies={moviesFromServer}/>
      </div>

      <div className='sidebar' data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
    </>
  );

};
