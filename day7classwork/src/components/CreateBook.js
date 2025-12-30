
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

function CreateBook() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');

  let navigate = useNavigate();

  function create() {
    axios.post('https://worksheet-library.mashupstack.com/books', {
      title : title,
      author :author,
      year : year,
      genre : genre
    }) .then (response => {
      alert(response.data.massage)
    })
    navigate('/')
  }

  return (
    <div className="container">
      <div className='row' style={{ marginTop:'50px' }}>

        <div className='col-3'></div>
        <div className='col'>

          <h2 className='text-center'>Add Books</h2>

          <form style={{ marginTop:'50px' }}>
            
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}/>
            </div>

            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(event) => {setAuthor(event.target.value)}}/>
            </div>

            <div className="form-group">
              <label>Published Year</label>
              <input
                type="number"
                placeholder='YYYY'
                className="form-control"
                value={year}
                onChange={(event) => {setYear(event.target.value)}}/>
            </div>

            <div className="form-group">
              <label>Genre</label>
              <input
                type="text"
                className="form-control"
                value={genre}
                onChange={(event) => {setGenre(event.target.value)}}/>
            </div>
            
            <button
              className="btn btn-primary float-right"
              onClick={create}>
              Submit
              </button>
          </form>

        </div>

        <div className='col-3'></div>

      </div>
    </div>
  );
}

export default CreateBook;
