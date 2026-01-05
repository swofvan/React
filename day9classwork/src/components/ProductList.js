import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./navbar";

import { useSelector } from "react-redux";

function ListProducts() {
    const [products, setProducts] = useState([]);
    var user = useSelector(store=>store.auth.user);

    function list() {
        axios.get('https://worksheet-product.mashupstack.com/product', {}, {
            Authorization : {'Authorization':"Bearer "+ user.token}
        }) .then(response => {
            setProducts(response.data)
        })
    }

    useEffect(() => {
        if (!user) return;
        list()
    },[user])

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col'>
                    <Navbar/>
                </div>
                </div>
            </div>

            <div className="container">
                <div className='row'>
                    <div className='col-6 offset-3'>
                        
                        <h1 className='text-center' style={{marginTop: '50px'}}>Products</h1>

                        <table className =" table table-bordered table-dark" style={{marginTop:'50px'}}>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>
                            ))}
                    </table>

                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListProducts;

//  3. Product List Page (Protected Page)
//   After login, show the user a list of products

//   Get the list from this API:
//     https://worksheet-product.mashupstack.com/product
//     Use the token from Redux like this:
//     Authorization: Bearer <token>
//     Each product has:
//     Name
//     Description
//     Price
//     Quantity
//   Display this information in a clean layout or table.
//     Example data from the API:
//     {
//       "id": "2",
//       "name": "Bluetooth Headphones",
//       "description": "Noise-cancelling over-ear headphones with long battery life.",
//       "price": "59.50",
//       "quantity": "50"
//     }