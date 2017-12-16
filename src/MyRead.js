import React from 'react';
import CurrentlyReading from './MyRead/CurrentlyReading';
import WantToRead from './MyRead/WantToRead';
import Read from './MyRead/Read';
import {Link} from 'react-router-dom';

const MyRead = () => {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <CurrentlyReading />
                    <WantToRead />
                    <Read />
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