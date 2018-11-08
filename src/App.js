import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

/*
 * Credit: App design based on Maeva's walkthrough for Study Jam
 * Source: https://www.youtube.com/watch?v=i6L2jLHV9j8
 */

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    });
  }

  render() {
    //console.log(this.state.books);
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchPage 
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )}
        />
        <Route exact path="/" render={() => (
          <MainPage 
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )}
        />
      </div>
    );
  }
}

export default BooksApp
