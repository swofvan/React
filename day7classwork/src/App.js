import logo from './logo.svg';
import './App.css';

import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import BookList from './components/BooksList';

function App() {

  const [books, setBooks] = useState([]);

  function List(){
    axios.get('https://worksheet-library.mashupstack.com/books') .then (response => {
      setBooks(response.data)
    })
  }
  useEffect (() => {
    List()
  },[])

  return (
    <div className="container">
      <div className='row' style={{ marginTop:'50px' }}>

        <div className='col-3'></div>
        <div className='col'>

          <h2 className='text-center'>Books</h2>

          <Link to={'/create'} className='btn btn-primary' style={{marginTop: '50px'}}>CreateBook</Link>

          {books.map(book => <BookList key={book.id} book={book} refresh = {List}  style={{marginTop: '50px'}}/> )}   

          <br/><br/>     

        </div>

        <div className='col-3'></div>

      </div>
    </div>
  );
}

export default App;



// You are building a Book Manager App for a small library. Your job is to connect the app to a real API and allow the user to:

//       Create a new book
//       View a list of all books
//       Edit a book's details
//       Delete a book

// You must use the following API:

//       Create: POST https://worksheet-library.mashupstack.com/books
//       Read/List: GET https://worksheet-library.mashupstack.com/books

//       Update: PUT https://worksheet-library.mashupstack.com/books/{id}

//        Delete: DELETE https://worksheet-library.mashupstack.com/books/{id}

// Each book field contains:

// title

// author

// published_year

// genre

// What You Need to Build:

//    A form to create a new book

//    A page to list all books

//    A button to delete a book from the list

//    A button to edit a book’s details using another form

