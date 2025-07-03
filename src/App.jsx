import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

const App = () => {
  return (
    <div className="App">
      <MovieList movies={moviesFromServer} />
    </div>
  );
};

export default App;
