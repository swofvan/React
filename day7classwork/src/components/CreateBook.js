
import axios from "axios";
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateBook() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');

  let navigate = useNavigate();

  function create(e) {
    

    e.preventDefault();
    
    let book= {
      title : title,
      author :author, 
      published_year : year,
      genre : genre
    }
    console.log(book)

    axios.post('https://worksheet-library.mashupstack.com/books',book)
    .then (response => {
      alert(response.data.message);
      navigate('/');
    })
    .catch (error => {
      console.log(error);
      alert("Failed to create book")
    }
    )
  }

  return (
    <div className="container">
      <div className='row' style={{ marginTop:'50px' }}>

        <div className='col-3'></div>
        <div className='col'>

          <Link to={'/'} className="btn btn-secondary">Back to List</Link>

          <h2 className='text-center'>Add Books</h2>

          <form style={{ marginTop:'50px' }} onSubmit={create}>
            
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
                type="text"
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
              type="submit">
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
