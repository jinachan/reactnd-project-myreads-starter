import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class MainPage extends React.Component {

    render() {
        //console.log(this.props.books);
        const shelves = [
            {title: 'Currently Reading', value: 'currentlyReading'},
            {title: 'Want to Read', value: 'wantToRead'},
            {title: 'Read', value: 'read'}
        ];
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {
                            shelves.map((shelf) => (
                                    <Shelf
                                        books={this.props.books}
                                        moveShelf={this.props.moveShelf}
                                        currentShelf={shelf.value}
                                        shelfTitle={shelf.title}
                                    />
                            ))
                        }

{/*                         <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <Shelf
                                books={this.props.books}
                                moveShelf={this.props.moveShelf}
                                currentShelf="currentlyReading"
                            />
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <Shelf
                                books={this.props.books}
                                moveShelf={this.props.moveShelf}
                                currentShelf="wantToRead"
                            />
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <Shelf
                                books={this.props.books}
                                moveShelf={this.props.moveShelf}
                                currentShelf="read"
                            />
                        </div> */}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }

}

export default MainPage;