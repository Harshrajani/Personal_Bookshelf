/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookSearchPage.css";
import { Sparkles } from "../ui/sparkles";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const BookSearchPage = () => {
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState([]);
	const [bookshelf, setBookshelf] = useState(() => {
		return JSON.parse(localStorage.getItem("bookshelf")) || [];
	});

	const words = [
		{
			text: "Search",
			className: "text-white-500 dark:text-white-500 search-text",
		},
		{
			text: "For",
			className: "text-white-500 dark:text-white-500  search-text",
		},
		{
			text: "Your",
			className: "text-white-500 dark:text-white-500 search-text",
		},
		{
			text: "Favourite",
			className: "text-white-500 dark:text-white-500 search-text highlight",
		},
		{
			text: "Books.",
			className: "text-white-500 dark:text-white-500 search-text highlight",
		},
	];

	useEffect(() => {
		if (query.length > 2) {
			const fetchBooks = async () => {
				try {
					const response = await axios.get(
						`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
					);
					setBooks(response.data.docs);
				} catch (error) {
					console.error("Error fetching the books:", error);
				}
			};
			fetchBooks();
		} else {
			setBooks([]);
		}
	}, [query]);

	const addToBookshelf = (book) => {
		const updatedBookshelf = [...bookshelf, book];
		setBookshelf(updatedBookshelf);
		localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
	};

	return (
		<div>
			<Sparkles
				background="transparent"
				minSize={0.4}
				maxSize={1}
				particleDensity={1200}
				className=" absolute w-full  inset-x-0 bottom-0  sparkles "
				particleColor="#FFFFFF"
			/>
			<h1 className="my-24 w-min ml-auto mr-auto ">
				<TypewriterEffectSmooth words={words} />
			</h1>
			<div className="search-container mb-16">
				<input
					type="text"
					className="form-control  w-1/2 "
					placeholder="Type the name of the book..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<span>
					<button
						className="btn search-btn"
						value={query}
						onClick={(e) => setQuery(e.target.value)}
					>
						Search
					</button>
				</span>
			</div>
			<div className="row">
   
				{books.map((book) => (
					<div key={book.key} className="col-md-3 mb-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title ">{book.title}</h5>
								<h6 className="card-subtitle mb-2 ">
									{book.author_name?.join(", ")}
								</h6>
								<p className="card-text">
									First published in {book.first_publish_year}
								</p>
								<button
									className="btn btn-primary"
									onClick={() => addToBookshelf(book)}
								>
									Add to Bookshelf
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
     
			
        <Link to="/bookshelf" className="btn btn-secondary bookshelf-btn">
				Go to My Bookshelf
			</Link>
		</div>
	);
};

export default BookSearchPage;
