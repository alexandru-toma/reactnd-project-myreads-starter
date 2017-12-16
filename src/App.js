import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MyRead from './MyRead';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          component={MyRead}
        />
        <Route
          path="/search"
          component={SearchBooks}
        />
      </div>
      )}
  }


export default BooksApp
