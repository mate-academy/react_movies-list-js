/* eslint-disable max-len */
import { MovieList } from './components/MovieList/MovieList';
import './App.scss';
import moviesFromServer from './api/movies.json';

export const App = () => <MovieList movies={moviesFromServer} />;
