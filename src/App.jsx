import { MovieList } from './components/MovieList';
import { Sidebar } from './components/Sidebar';

import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList />
    </div>

    <Sidebar />
  </div>
);
