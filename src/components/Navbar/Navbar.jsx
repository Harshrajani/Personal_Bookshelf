/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar justify-content-between mb-4">
				<Link className="nav-title" to="/">
					Personal Bookshelf
				</Link>
				<ul className="nav-list">
					<Link className="nav-link " to="/">
						{" "}
						<li className="nav-item">Book Search </li>
					</Link>

					<Link className="nav-link" to="/bookshelf">
						<li className="nav-item">My Bookshelf</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
