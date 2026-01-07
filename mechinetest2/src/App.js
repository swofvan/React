import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/Navber';

function App(bookmarklist) {

  const user = useSelector(store => store.auth.user);

  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      alert('Please login to access this page.')
      navigate('/login');
    }
  },[user])


  const [bookmarks, setBookmarks] = useState([]); 

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    var x = bookmarks.length+1;
    var newbookmark = {
        id : x,
        title : title,
        url: url,
        createdAt: new Date().toLocaleString()
        };

    if (bookmarks.length >= 5) {
      alert(`You can only add up to 5 bookmarks.`);
      return;
    }

    setBookmarks([...bookmarks, newbookmark]);
    setTitle('');
    setUrl('');
    };

    const [editingBookmarkId, setEditingBookmarkId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedUrl, setEditedUrl] = useState("");

    const [searchTerm, setSearchTerm] = useState("");

    const handleEditBookmark = (b) => {
      setEditingBookmarkId(b.id);
      setEditedTitle(b.title);
      setEditedUrl(b.url);
    };

    const handleSaveBookmark = () => {
      if (editedTitle.trim() !== "") {
        const updatedBookmark = bookmarks.map((b) => {
          if (b.id === editingBookmarkId) {
            return {
              ...b,
              title : editedTitle,
              url : editedUrl 
            };
          }
          return b;
        });
        setBookmarks(updatedBookmark);
        setEditingBookmarkId(null);
      }
    };
  
    const handleCancelEdit = () => {
      setEditingBookmarkId(null);
      setEditedTitle("");
      setEditedUrl("");
    };

    const handleDelete = (id) => {
      const filteredBookmarks = bookmarks.filter( (link) => link.id !== id);
      setBookmarks(filteredBookmarks);
      alert('Bookmark deleted')
    };

    const handleSearch = (event) => {
    event.preventDefault();
    const filteredBookmarks = bookmarks.filter((b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setBookmarks(filteredBookmarks);
    };

    const handleResetSearch = () => {
        setSearchTerm("");
    };

  return (
    <div>
      <Navbar/>

       <div className="container">
          <div className='row'>
            <div className='col-4 offset-4'>
            <h1 className='text-center' id='main-heading'>Add BookMark</h1>
            <form onSubmit={handleSubmit} id="urlform">
              <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    placeholder="Enter Title"
                    onChange={(event) => setTitle(event.target.value)}
                  />
              </div>
               <div className="form-group">
                  <label>URL</label>
                  <input
                    type="text"
                    className="form-control"
                    value={url}
                    placeholder="Enter URLs"
                    onChange={(event) => setUrl(event.target.value)}
                  />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary float-right"
                  onClick={handleSubmit}
                  >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
          <div className="row" >
            <div className="col-8 offset-2" style={{marginTop:'50px'}}>
              
              <hr/>

              <form onSubmit={handleSearch} className='float-right' style={{marginTop:'50px'}}>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search Bookmarks'
                    />
                    &nbsp;
                  <button className="btn btn-small btn-success" type="submit">Search</button>&nbsp; 
                </form>
            </div>
          </div>
        </div>

        <div className="container">
          <div className='row'>
            <div className='col-8 offset-2'>

              <h1 className='text-center' id='main-heading'>Top Bookmarking Sites List</h1>


              <table className='table table-bordered' id='urltable'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>URLs</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                
                <tbody>
                  {bookmarks.map((b) => 
                    <tr key={b.id}>
                      <td>{b.id}</td>

                      <td>
                        {editingBookmarkId === b.id ? (
                          <input
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                          />
                        ) : (
                          b.title
                        )}
                      </td>

                      <td>
                        {editingBookmarkId === b.id ? (
                          <input
                            value={editedUrl}
                            onChange={(e) => setEditedUrl(e.target.value)}
                          />
                        ) : (
                          b.url
                        )}
                      </td>

                      <td>
                        {editingBookmarkId === b.id ? (
                          <>
                            <button className="btn btn-success btn-sm" onClick={handleSaveBookmark}>
                              Save
                            </button>
                            <button
                              className="btn btn-secondary btn-sm ms-2"
                              onClick={handleCancelEdit}
                              style={{marginLeft:'10px'}}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-warning btn-sm"
                              onClick={() => handleEditBookmark(b)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm ms-2"
                              onClick={() => handleDelete(b.id)}
                              style={{marginLeft:'20px'}}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  )}
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


// Personal Bookmarking Site
// - User can signup in the website
// - Logged in users can add a url and a title
// - The logged in user should be able to add only 5 bookmarks after which it should show an error
// - Logged in users can view the list of urls, along with title and added time
// - The listing page should have pagination
// - Users should be able to search for a particular title/url 
// - Logged in users can edit/delete the urls
// - Logged in users can logout of the website