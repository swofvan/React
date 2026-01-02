import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateProduct() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');

    const navigate = useNavigate();

    function addProduct() {
        axios.post('https://worksheet-catalogue.mashupstack.com/products', {
            name : name,
            price : price,
            category : category,
            quantity : quantity
        }) .then(response => {
            alert(response.data.message)
            navigate('/')
        })
    }

    return (
        <div className="container">
            <div className='row' style={{marginTop: '50px'}}>

                <div className='col-3'></div>

                <div className='col'>
                    <h1 className="text-center">Add Product</h1>

                    <div className="form-group">
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
                        <button className="btn btn-primary float-right" onClick={addProduct}>Submit</button>
                        <Link to={'/'} className="btn btn-danger float-left">Cancel</Link>
                    </div>

                </div>

                <div className='col-3'></div>
                
            </div>
        </div>
    )
}

export default CreateProduct;

