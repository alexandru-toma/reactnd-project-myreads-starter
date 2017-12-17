import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MyRead from './MyRead';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
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
              books={this.state.books}
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
