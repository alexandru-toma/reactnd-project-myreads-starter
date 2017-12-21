import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MyRead from './MyRead';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    myBooks: [],
    searchResult: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        myBooks: books
      });
    });
  }

  getSearchResult = (query) => {
    (query.length > 0) ?
      BooksAPI.search(query).then((searchResult) => {
        if(!searchResult.error){
          this.setState({ searchResult });
          this.updateSearchResultsWithShelf();
        } else {
          this.setState({ searchResult: [] });
        }})
       :
      this.setState({ searchResult: [] });
  }

  handleShelfChange = (bookId, shelf) => {
    BooksAPI.get(bookId).then((book) => {
      BooksAPI.update(book, shelf).then(() => {
        this.getAllBooks();
      });
    });
  }

  updateSearchResultsWithShelf = () => {
    this.setState({
      searchResult: this.state.searchResult.map(book => {
        book.shelf = 'none'

        this.state.myBooks.forEach(bookOnShelf => {
          bookOnShelf.id === book.id && (book.shelf = bookOnShelf.shelf)
        })
        return book;
      })
    })
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
              currentlyReading={this.state.myBooks.filter(book => book.shelf === 'currentlyReading')}
              wantToRead={this.state.myBooks.filter(book => book.shelf === 'wantToRead')}
              read={this.state.myBooks.filter(book => book.shelf === 'read')}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.searchResult}
              getSearchResult={this.getSearchResult}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
