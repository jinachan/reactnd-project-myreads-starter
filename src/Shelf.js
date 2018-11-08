import React from 'react';
import Book from './Book';

class Shelf extends React.Component {

    render() {
        //console.log(this.props.shelfTitle);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books
                                .filter(book => book.shelf === this.props.currentShelf)
                                .map(book => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            moveShelf={this.props.moveShelf}
                                            currentShelf={this.props.currentShelf}
                                        />
                                    </li>
                                ))
                        }
                    </ol>
                </div>
            </div>
        )
    }

}

export default Shelf;