import React from 'react';

export default function Books({ book }) {
  return (
    <div className="book">
      <p>Title: {book.title}</p>
      <p>Written By: {book.author}</p>
      <p>{book.pages} Pages</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
}
