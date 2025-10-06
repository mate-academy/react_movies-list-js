import { useState, useMemo } from 'react';
import moviesData from './api/movies.json';

const MovieCard = ({ movie }) => {
  const handleImageError = event => {
    const { target } = event;

    target.onerror = null;
    target.src = 'https://placehold.co/300x400/888/fff?text=No+Image';
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow
                 duration-300 hover:shadow-2xl"
      data-cy="Movie"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          data-cy="MovieImage"
          src={movie.imgUrl}
          alt={`Постер фільму ${movie.title}`}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      <div className="p-4">
        <div className="mb-2">
          <p
            className="text-lg font-bold text-gray-800 leading-tight"
            data-cy="MovieTitle"
          >
            {movie.title}
          </p>
        </div>

        <div className="text-sm text-gray-600 space-y-2">
          <p data-cy="MovieDescription" className="line-clamp-3">
            {movie.description}
          </p>

          <a
            href={movie.imdbUrl}
            data-cy="MovieLink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-500 hover:text-blue-700
                       font-medium mt-2"
          >
            IMDB Link
          </a>
        </div>
      </div>
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                 lg:grid-cols-4 gap-6 p-4"
    >
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};

export const App = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.target.value);
  };

  const visibleMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery.length === 0) {
      return moviesData;
    }

    return moviesData.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = movie.description
        .toLowerCase()
        .includes(normalizedQuery);

      return titleMatch || descriptionMatch;
    });
  }, [query]);

  const hasMovies = visibleMovies.length > 0;
  const isSearching = query.trim().length > 0;

  let content;

  if (hasMovies) {
    content = <MovieList movies={visibleMovies} />;
  } else if (isSearching) {
    content = (
      <p
        className="text-center text-xl text-gray-600 p-8 bg-white
                    rounded-xl shadow"
      >
        На жаль, фільми за запитом &quot;{query}&quot; не знайдено.
      </p>
    );
  } else {
    content = (
      <p
        className="text-center text-xl text-gray-600 p-8 bg-white
                    rounded-xl shadow"
      >
        Завантаження... (Хоча дані вже завантажені)
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 font-sans antialiased">
      <header className="py-6 px-4 bg-white shadow-md rounded-lg mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Каталог Фільмів
        </h1>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Шукати за назвою або описом..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2
                     focus:ring-blue-500 focus:border-blue-500 transition
                     duration-150"
        />
      </header>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:flex-grow">{content}</div>

        <div
          className="lg:w-64 bg-white p-6 rounded-xl shadow-lg border
                     border-gray-200"
          data-cy="Sidebar"
        >
          Sidebar will be here
        </div>
      </div>
    </main>
  );
};
