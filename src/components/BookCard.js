import React, { useState } from 'react';
import BookDetail from './BookDetail';

function BookCard({ book }) {
    const [showDetail, setShowDetail] = useState(false);
    const thumbnail = book.volumeInfo.imageLinks?.thumbnail || '';

    const toggleDetail = () => {
        setShowDetail(!showDetail);
    };

    return (
        <div className="book-card">
            <img src={thumbnail} alt={book.volumeInfo.title} onClick={toggleDetail} />
            {showDetail && <BookDetail book={book} />}
        </div>
    );
}

export default BookCard;
