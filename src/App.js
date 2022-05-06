import './App.css';
import { useEffect, useState } from 'react';
import { getBooks } from './services/fetch-utils';
import BookList from './BooksList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    const bookResponse = await getBooks();

    setBooks(bookResponse);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BookList books={books} />
      </header>
    </div>
  );
}

export default App;
