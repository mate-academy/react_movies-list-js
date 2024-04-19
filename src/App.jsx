/* eslint-disable max-len */

import './App.scss';
import { MovieCard } from './components/MovieCard/MovieCard';
import { MovieList } from './components/MovieList/MovieList';
import { SideBar } from './components/SideBar/SideBar';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList />
      <MovieCard />
      <SideBar />
    </div>
  </div>
);
