import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI';
import './styles/App.css';
import SearchBooks from './components/SearchBooks';
import MyRead from './components/MyRead';
import { Route, Switch } from 'react-router-dom';
import update from 'immutability-helper';
import ErrorPage from "./components/ErrorPage";

class BooksApp extends Component {
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
        if (!searchResult.error) {
          this.setState({ searchResult });
          this.updateSearchResultsWithShelf();
        } else {
          this.setState({ searchResult: [] });
        }
      })
      :
      this.setState({ searchResult: [] });
  }

  handleShelfChange = (bookId, shelf) => {
    BooksAPI.get(bookId).then((book) => {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(previousState => ({
          myBooks: previousState.myBooks.filter(b => b.id !== book.id).concat([book])
        }))
        this.updateSearchResultsWithShelf();
      });
    });
  }

  updateSearchResultsWithShelf = () => {
    let newMyBooks = update(this.state.myBooks, { $set: this.state.myBooks });
    return this.setState(previousState => ({
      searchResult: previousState.searchResult.map(book => {
        book.shelf = 'none'
        newMyBooks.forEach(bookOnShelf => {
          bookOnShelf.id === book.id && (book.shelf = bookOnShelf.shelf)
        })

        return book;
      })
    }))
  }

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        <Switch>
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
            render={({ history }) => (
              <SearchBooks
                books={this.state.searchResult}
                getSearchResult={this.getSearchResult}
                handleShelfChange={this.handleShelfChange}
                goHomePage={() => { history.push('/') }}
              />
            )}
          />
          <Route component={ErrorPage}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
