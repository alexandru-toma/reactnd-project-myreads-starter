import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select id={book.id} onChange={this.handleShelfChange}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks;