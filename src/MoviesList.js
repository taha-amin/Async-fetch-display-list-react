import React from 'react';
import Movies from './MovieItem';

export default function MoviesList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movies key={movie.name} movie={movie} />
      ))}
    </div>
  );
}
