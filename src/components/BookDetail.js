import React from 'react';

function BookDetail({ book }) {
    const truncateDescription = (description, maxLength) => {
        if (description) {
            if (description.length <= maxLength) {
                return description;
            }
            return description.slice(0, maxLength) + '...';
        }
    };

    return (
        <div className="book-detail">
            <div className="book-info">
                <h2>{book.volumeInfo.title}</h2>
                <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                <p>{truncateDescription(book.volumeInfo.description, 100)}</p>
            </div>
            <div className="book-links">
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                    <button>Read Now</button>
                </a>
                <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                    <button>More Info</button>
                </a>
            </div>
        </div>
    );
}

export default BookDetail;
