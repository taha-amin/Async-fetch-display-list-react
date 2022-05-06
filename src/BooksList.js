import React from 'react';
import Books from './BookItem';

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Books key={book.title} book={book} />
      ))}
    </div>
  );
}
