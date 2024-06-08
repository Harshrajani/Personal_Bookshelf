/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    return JSON.parse(localStorage.getItem('bookshelf')) || [];
  });

  const removeFromBookshelf = (bookKey) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookKey);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  useEffect(() => {
    setBookshelf(JSON.parse(localStorage.getItem('bookshelf')) || []);
  }, []);

  return (
    <div>
      <h1 className="my-4">My Bookshelf</h1>
      <div className="row">
        {bookshelf.map((book) => (
          <div key={book.key} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author_name?.join(', ')}</h6>
                <p className="card-text">First published in {book.first_publish_year}</p>
                <button className="btn btn-danger" onClick={() => removeFromBookshelf(book.key)}>Remove from Bookshelf</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
