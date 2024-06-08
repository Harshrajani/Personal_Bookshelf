/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookshelfPage.css';

import { Sparkles } from "../ui/sparkles";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const words = [
  {
    text: "Read",
    className: "text-white-500 dark:text-white-500 search-text h-16",
  },
  {
    text: "Your",
    className: "text-white-500 dark:text-white-500 search-text  h-16",
  },
  {
    text: "Favourite",
    className: "text-white-500 dark:text-white-500 search-text  h-16 highlight ",
  },
  {
    text: "Books.",
    className: "text-white-500 dark:text-white-500 search-text  h-16 highlight",
  },
];

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
      <Sparkles
				background="transparent"
				minSize={0.4}
				maxSize={1}
				particleDensity={1200}
				className=" absolute w-full  inset-x-0 bottom-0 right-0  sparkles "
				particleColor="#FFFFFF"
			/>
      <h1 className="my-24 w-min ml-auto mr-auto ">
				<TypewriterEffectSmooth words={words} />
			</h1>
      <div className="row">
        {bookshelf.map((book) => (
          <div key={book.key} className="col-md-3 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle ">{book.author_name?.join(', ')}</h6>
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
