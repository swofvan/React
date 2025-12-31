import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function EditBooks() {
    const {bookId} = useParams();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('https://worksheet-library.mashupstack.com/books/'+bookId).then(response => {
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setYear(response.data.year);
            setGenre(response.data.genre);
        })
        .catch(err => console.log(err));
    },[bookId]);

    function updateBook(e) {
        
        e.preventDefault();

        axios.put('https://worksheet-library.mashupstack.com/books/'+bookId, {
            title : title,
            author : author,
            published_year : year,
            genre : genre
        }).then (response => {
            alert(response.data.message);
            navigate('/');
        })
    }

    return(
        <div className="container">
            <div className='row' style={{ marginTop:'50px' }}>

                <div className='col-3'></div>
                <div className='col'>

                    <Link to={'/'} className="btn btn-secondary">Cancel</Link>

                    <h2 className='text-center'>Edit Book</h2>

                    <form style={{ marginTop:'50px' }} onSubmit={updateBook}>
                        
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
    )
}

export default EditBooks;