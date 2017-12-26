import React from 'react';
import BookItem from './BookItem';

const BooksDisplay = (props) => {

  const handleShelfChange = (event) => {
    event.preventDefault();
    props.handleShelfChange(event.target.id, event.target.value);
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book, index) =>
            <li key={book.id}>
              <BookItem
                index={index}
                book={book}
                handleShelfChange={handleShelfChange}
                currentShelf={book.shelf}
              />
            </li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default BooksDisplay;