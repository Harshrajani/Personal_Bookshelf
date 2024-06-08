/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import BookSearchPage from './components/BookSearchPage/BookSearchPage'
import BookshelfPage from './components/BookshelfPage/BookshelfPage'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <><Navbar /><BookSearchPage /></> },
    { path: '/bookshelf', element: <><Navbar /><BookshelfPage /></> }, 
  ]);

  return (
     <>     
     
      
      <RouterProvider router={router} />
     
     </>
    );
  };

export default App;



