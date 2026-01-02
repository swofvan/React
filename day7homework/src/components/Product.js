import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Product() {
    
    var { productId } = useParams();
    var [product, setProduct] = useState({
        name : '',
        price : '',
        category : '',
        quantity : ''
    })


    useEffect(() => {
        axios.get('https://worksheet-catalogue.mashupstack.com/products/'+productId) .then(response => {
            setProduct(response.data)
        })
    },[productId]);
    
    return(
        <div className="container">
            <div className='row' style={{marginTop: '50px'}}>

                <div className='col-3'></div>

                <div className='col'>
                    <div className="card">
                        <div className="card-header bg-primary text-white"><h3>{product.name}</h3></div>
                        <div className="card-body">
                            <p>Price: <b>{product.price}</b>/-</p>
                            <p>Category: <b>{product.category}</b></p>
                            <p>Quantity: <b>{product.quantity}</b></p>
                        </div>
                    </div>

                    <Link to={'/'} className="btn btn-secondary float-right" style={{marginTop:'20px'}}>Back to List</Link>
                </div>

                <div className='col-3'></div>
                
            </div>
        </div>
    )
}

export default Product;