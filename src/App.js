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
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentlyReading: books.filter( book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter( book => book.shelf === 'wantToRead'),
        read: books.filter( book => book.shelf === 'read')
      });
    });
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
            />
          )}
        />
        <Route
          path="/search"
          component={SearchBooks}
        />
      </div>
      )}
  }


export default BooksApp
