import axios from "axios";
import { Link } from "react-router-dom";

function BookList(props) {

    return (
        <div className="container">
            <div className='row' style={{ marginTop:'50px' }}>

                <div className='col'>

                    <table className="table table-hover" >
                        {/* <thead>
                            <th>Title</th>
                            <th>Author</th>
                            <th>published Year</th>
                            <th>Genre</th>
                        </thead> */}
                        {/* <tbody> */}
                            <th>{props.book.title}</th>
                            <td>{props.book.author}</td>
                            <td>{props.book.year}</td>
                            <td>{props.book.genre}</td>
                            <td></td>
                        {/* </tbody> */}
                    </table>

                    </div>

                </div>

            </div>
    )
}

export default BookList;