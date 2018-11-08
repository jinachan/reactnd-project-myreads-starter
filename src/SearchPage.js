import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
//import escapeRegExp from 'escape-string-regexp'

class SearchPage extends React.Component {
    state = {
        query: '',
        searchedBooks: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.updateSearchedBooks(query);
    }

    updateSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ searchedBooks: [] });
                } else {
                    this.setState({ searchedBooks });
                }
            })
        } else {
            this.setState({ searchedBooks: [] });
        }

    }

    render() {
        //console.log(this.state.query);
        
        // This is how the contacts app handles searching:
/*         let showingBooks;
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingBooks = this.props.books.filter((book) => match.test(book.title));
        } else {
            showingBooks = [];
            // Don't show any books if there's no query string
        } */
 
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks
                                .map(book => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            moveShelf={this.props.moveShelf}
                                            currentShelf="none"
                                            // TO DO: identify the actual shelf
                                        />
                                    </li>
                                ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;