import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function EditProduct() {
    const { productId } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('https://worksheet-catalogue.mashupstack.com/products/'+productId).then(response => {
            setName(response.data.name);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setQuantity(response.data.quantity);
        })
    },[productId]);

    function updateProduct() {
        axios.put('https://worksheet-catalogue.mashupstack.com/products/'+productId, {
            name: name,
            price: price,
            category: category,
            quantity: quantity
        }) .then(response => {
            alert(response.data.message)
            navigate('/')
        })
    }

    return(
        <div className="container">
            <div className='row' style={{marginTop: '50px'}}>

                <div className='col-3'></div>

                <div className='col'>
                    <h1 className="text-center">Edit Product</h1>

                    <div className="form-group" style={{marginTop: '50px'}}>
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(event) => {setName(event.target.value)}}
                            />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="text"
                            className="form-control"
                            value={price}
                            onChange={(event) => {setPrice(event.target.value)}}
                            />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            className="form-control"
                            value={category}
                            onChange={(event) => {setCategory(event.target.value)}}
                            />
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            type="text"
                            className="form-control"
                            value={quantity}
                            onChange={(event) => {setQuantity(event.target.value)}}
                            />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updateProduct}>Update</button>
                        <Link to={'/'} className="btn btn-danger float-left">Cancel</Link>
                    </div>

                </div>

                <div className='col-3'></div>
                
            </div>
        </div>
    )
}

export default EditProduct;