import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';

class SearchBooks extends Component {

    handleSearch = (event) => {
        this.props.getSearchResult(event.target.value);
    }

    handleShelfChange = (event) => {
        event.preventDefault();
        this.props.handleShelfChange(event.target.id, event.target.value);
      }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.handleSearch} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.props.searchResult.map((book, index) => 
                        <li key={index}>
                        <BookItem
                          index={index}
                          book={book}
                          handleShelfChange={this.handleShelfChange}
                        />
                      </li>
                    )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks;