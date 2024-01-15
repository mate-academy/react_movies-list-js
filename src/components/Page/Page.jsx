import moviesFromServer from '../../api/movies.json';

import { MovieList } from '../MovieList';
import { Sidebar } from '../Sidebar';

import './Page.scss';

export const Page = () => (
  <div className="page">
    <div className="page-content">
      <MovieList
        movies={moviesFromServer}
      />
    </div>

    <Sidebar />
  </div>
);
