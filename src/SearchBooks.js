import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';

const SearchBooks = (props) => {

    const handleSearch = (event) => {
        event.preventDefault();
        props.getSearchResult(event.target.value);
    }
    
   const handleShelfChange = (event) => {
        event.preventDefault();
        props.handleShelfChange(event.target.id, event.target.value);
      }
    
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={handleSearch} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {props.books.map((book, index) => 
                        <li key={index}>
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

export default SearchBooks;