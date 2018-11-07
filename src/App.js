import React from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
//import * as BooksAPI from './BooksAPI'
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
    showSearchPage: false
  }

  /* TO DO
  Task 1: find out what the BooksAPI returns by calling getAll() and seeing what the books
  objects returned look like.
  
  Then start building components that use them.
  
  */


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <MainPage />
        )
        }
      </div>
    );
  }
}

export default BooksApp
