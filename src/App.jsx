/* eslint-disable max-len */
import moviesFromServer from './api/movies.json';
import './App.scss';
import { MovieList } from './components/MovieList';
import { Sidebar } from './components/SideBar/SideBar';

export const App = () => {
  return (
    <div className="page">
      <div className="page-content">
        <MovieList movies={moviesFromServer} />
      </div>
      <Sidebar />
    </div>
  );
};
