import './App.css';
import { useEffect, useState } from 'react';

import { getBooks } from './services/fetch-utils';
import BookList from './BooksList';

import { getMovies } from './services/fetch-utils';
import MoviesList from './MoviesList';

function App() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const bookResponse = await getBooks();
    const movieResponse = await getMovies();

    setMovies(movieResponse);

    setBooks(bookResponse);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BookList books={books} />
        <MoviesList movies={movies} />
      </header>
    </div>
  );
}

export default App;
