import axios from "axios";
import { Link } from "react-router-dom";

function ProductList(props) {

    function deleteProduct() {
        axios.delete('https://worksheet-catalogue.mashupstack.com/products/'+props.product.id). then(response => {
            alert(response.data.message)
            props.refresh()
        })
    }

    return(
        <div className="container">
            <div className='row' style={{marginTop: '50px'}}>

                <div className='col'>

                <div className="card-body">
                    <span style={{ fontSize: '20px', fontWeight: 'normal' }}>{props.product.name}</span>
                    <button className="btn btn-danger float-right" onClick={deleteProduct}>Delete</button>
                    <Link to={'/edit/'+props.product.id} className="btn btn-warning float-right" style={{marginRight:'20px'}}>Edit</Link>
                    <Link to={'/view/'+props.product.id} className="btn btn-primary float-right"  style={{marginRight:'20px'}}>View</Link>
                    
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductList;