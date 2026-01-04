import './App.css';
import React, {useState} from 'react';

function App() {

  var [books, setBooks] = useState([
    {id: 1, name : 'Pride and Prejudice', author: 'Austen', date: "01-05-2001"},
    {id: 2, name : 'The Great Gatsby', author: 'Fitzgerald', date: "10-05-1994"},
    {id: 3, name : 'Harry Potter', author: 'Rowling', date: "25-04-1990"},
  ])

  const [bookName, setBookName ] = useState('');
  const [author,setAuthor] = useState('');
  const [date, setDate] = useState('');

  const [editingBookId, setEditingBookId] = useState(null);
  const [editedBookname, setEditedBookName] = useState('');
  const [editedAuthor, setEditedAuthor] = useState('');
  const [editedDate, setEditedDate] = useState('');

  const [searchTerm, setSearchTerm] = useState("");

  // const handleInputChange = (event) => {
  //     setBookName(event.target.value);

  const handleBookChange = (e) => setBookName(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = ( event ) => {
    event.preventDefault();
    var x = books.length+1;
    var newBook = {
        id : x,
        name : bookName,
        author : author,
        date : date
        };
    setBooks([...books, newBook]);
    setBookName("");
    setAuthor("");
    setDate("");
    };

  const handleEditBook = (book) => {
    setEditingBookId(book.id);
    setEditedBookName(book.name);
    setEditedAuthor(book.author);
    setEditedDate(book.date);
  };

  const handleSavebook = () => {
    if (editedBookname.trim() !== "" ||
      editedAuthor.trim() === '' ||
      editedDate === '') {
      const updatedbooks = books.map((book) => {
        if (book.id === editingBookId) {
          return { ...book,
            name: editedBookname,
            author: editedAuthor,
            date: editedDate
          };
        }
        return book;
      });
      setBooks(updatedbooks);
      setEditingBookId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingBookId(null);
    setEditedBookName('');
    setEditedAuthor('');
    setEditedDate('');
  };


  const handleDelete = (id) => {
    const filteredBooks = books.filter( (book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredbooks = books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredbooks);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
  };

  return (

    <div>

      <div className="container">
        <div className="row" style={{marginTop: '50px'}}>
          <div className='col-3'></div>
          <div className="col">
            <form onSubmit={handleSearch} style={{float: 'right'}}>
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Books'/>&nbsp;
              <button className="btn btn-small btn-success" type="submit">Search</button>&nbsp;
            </form>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
      

      <div className = "container ">
        <div className = "row" style={{marginTop: '50px'}}>

          <div className='col-3'></div>
            <div className= "col">

              <h2 className='text-center'>Add Books</h2>

              <form onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                <label>Book Name: </label>
                <input
                  type="text"
                  value={bookName}
                  onChange={handleBookChange}
                  className='form-control'
                />
                <br/>
                <label>Author Name: </label>
                <input
                  type="text"
                  value={author}
                  onChange={handleAuthorChange}
                  className='form-control'
                />
                <br/>
                <label>Publish Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  className='form-control'
                />
                <br/>

                  <button className="btn btn-small btn-success" type="submit"> Add </button>
              </form>

            </div>
            <div className='col-3'></div>
        </div>
      </div>
          <br/>

      <div className="container">
        <div className='row'>

          <div className='col'>
            <h1 className='text-center text-primary' style={{marginTop: '50px'}}>Book List</h1>

            <table className ="table table-bordered" style={{marginTop: '50px'}}>
              <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Published Date</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody> 
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>

                  <td>
                    {editingBookId === book.id ? (
                      <input
                        value={editedBookname}
                        onChange={(e) => setEditedBookName(e.target.value)}
                        className="form-control"
                      />
                    ) : book.name}
                  </td>

                  <td>
                    {editingBookId === book.id ? (
                      <input
                        value={editedAuthor}
                        onChange={(e) => setEditedAuthor(e.target.value)}
                        className="form-control"
                      />
                    ) : book.author}
                  </td>

                  <td>
                    {editingBookId === book.id ? (
                      <input
                        type="date"
                        value={editedDate}
                        onChange={(e) => setEditedDate(e.target.value)}
                        className="form-control"
                      />
                    ) : book.date}
                  </td>

                  <td>
                    {editingBookId === book.id ? (
                      <>
                        <button className="btn btn-success" onClick={handleSavebook}>Save</button>
                        &nbsp;
                        <button className="btn btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-primary" onClick={() => handleEditBook(book)}>Edit</button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

            </table>

            <br/><br/>

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;



// you will create a single-page web application (SPA) called the Book List Management App using React
// The application will allow users to manage a collection of books with features to add, edit, delete, and search for books, displayed in a user-friendly table format.

// You are tasked with building a React-based SPA that includes the following features, each clearly defined to guide your development:

// Add a New Book:
//      Create a form with input fields for book name, author name, and publish date (date input).
//      Include an "Add Book" button to submit the form.
//      When submitted, the book should be added to the list, and the input field should clear.
//      Prevent empty book names from being added.

// Display the Book List:
//      Show all books in a table format with columns for ID, book name, author name, publish date, and actions.
//      Use the ID generated by incrementing the total length of the book list when adding new books.
//      Display a message like "No books found" if the list is empty.
     

// Edit a Book:
//      Provide an "Edit" button in each table row.
//      Clicking "Edit" should replace the book name with an input field for inline editing.
//      Include "Save" and "Cancel" buttons to confirm or discard changes.
//      Ensure the edited book name is not empty before saving.
// Delete a Book:
//     Include a "Delete" button in each table row.
//     Clicking "Delete" should immediately remove the book from the list.
// Search for Books:
//     Add a search input field above the table to filter books.
//     Filter books  (case-insensitive) based on the search term, matching against book name or author name.
//     Display "No books found" if no books match the search term.