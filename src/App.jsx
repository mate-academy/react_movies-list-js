/* eslint-disable max-len */

import './App.scss';
// import { MovieList } from './components/MovieList';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';

// const MovieCard = ({ moovie }) => (
//   <div className="card" data-cy="Movie">
//     <div className="card-image">
//       <figure className="image is-4by3">
//         <img data-cy="MovieImage" src={moovie.imgUrl} alt="Film logo" />
//       </figure>
//     </div>

//     <div className="card-content">
//       <div className="media">
//         <div className="media-left">
//           <figure className="image is-48x48">
//             <img src="images/imdb-logo.jpeg" alt="imdb" />
//           </figure>
//         </div>

//         <div className="media-content">
//           <p className="title is-8" data-cy="MovieTitle">
//             {moovie.title}
//           </p>
//         </div>
//       </div>

//       <div className="content">
//         <p data-cy="MovieDescription">{moovie.description}</p>

//         <a href={moovie.imdbUrl} data-cy="MovieLink">
//           IMDB
//         </a>
//       </div>
//     </div>
//   </div>
// );

// const MovieList = () => (
//   <div className="movies">
//     {moviesFromServer.map(moovie => (
//       <MovieCard moovie={moovie} key={moovie.imdbId} />
//     ))}
//   </div>
// );

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList moviesFromServer={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
