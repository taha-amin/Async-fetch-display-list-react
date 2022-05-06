import './App.css';
import { useEffect, useState } from 'react';

import { getBooks } from './services/fetch-utils';
import BookList from './BooksList';

import { getMovies } from './services/fetch-utils';
import MoviesList from './MoviesList';

import { getArtists } from './services/fetch-utils';
import ArtistList from './ArtistsList';

import { getPlayers } from './services/fetch-utils';
import PlayerList from './PlayersList';

function App() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [artists, setArtists] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(async () => {
    const bookResponse = await getBooks();
    const movieResponse = await getMovies();
    const artistResponse = await getArtists();
    const playerResponse = await getPlayers();

    setPlayers(playerResponse);

    setArtists(artistResponse);

    setMovies(movieResponse);

    setBooks(bookResponse);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="books-section-quarter">
          <BookList books={books} />
        </div>
        <div className="movies-section-quarter">
          <MoviesList movies={movies} />
        </div>
        <div className="artists-section-quarter">
          <ArtistList artists={artists} />
        </div>
        <div className="players-section-quarter">
          <PlayerList players={players} />
        </div>
      </header>
    </div>
  );
}

export default App;
