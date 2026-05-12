import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import moviesFromServer from './api/movies.json';

import { App } from './App';

createRoot(document.getElementById('root')).render(
  <App moviesFromServer={moviesFromServer} />,
);
