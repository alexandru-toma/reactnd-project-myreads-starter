import React from 'react'

const BookItem = (props) => {
    return (
        <div>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select id={props.book.id} onChange={props.handleShelfChange} value={props.currentShelf}>
                            <option value="moveto" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                {props.book.authors ? props.book.authors.map(author => (
                    <div key={author} className="book-authors">{author}</div>
                )) : ''}
            </div>
        </div>
    );
}

export default BookItem;