import React from 'react';
import BookDisplay from './BookDisplay';
import {Link} from 'react-router-dom';

const MyRead = (props) => {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookDisplay 
                        books={props.currentlyReading}
                        title="Currently Reading"/>
                    <BookDisplay 
                        books={props.wantToRead}
                        title="Want To Read"/>
                    <BookDisplay 
                        books={props.read}
                        title="Read"/>
                </div>
            </div>
            <div className="open-search">
                <Link 
                    to="/search"
                >Add a book
                </Link>
             </div>
        </div>
    );
}

export default MyRead;