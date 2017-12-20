import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MyRead from './MyRead';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    searchResult: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentlyReading: books.filter( book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter( book => book.shelf === 'wantToRead'),
        read: books.filter( book => book.shelf === 'read')
      });
    });
  }
  
  getSearchResult = (query) => {
    BooksAPI.search(query).then((searchResult) => {
      this.setState({searchResult});
    })
  }

  handleShelfChange = (bookId, shelf) => {
    BooksAPI.get(bookId).then((book) => {
      BooksAPI.update(book, shelf).then(() => {
        this.getAllBooks();
      });
    });
  }

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MyRead
              currentlyReading={this.state.currentlyReading}
              wantToRead={this.state.wantToRead}
              read={this.state.read}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchResult={this.state.searchResult}
              getSearchResult={this.getSearchResult}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
      </div>
      )}
  }


export default BooksApp
