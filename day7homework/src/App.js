import logo from './logo.svg';
import './App.css';

import axios from "axios"
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

import ProductList from './components/ProductsList';

function App() {

  const [products, setProducts] = useState([]);

  const [filteredProducrs, setFilteredProducrs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  let navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      setFilteredProducrs(products);
    }
    else {
      var filteredProducrs = products.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducrs(filteredProducrs);
    }
  }

  function list() {
    axios.get('https://worksheet-catalogue.mashupstack.com/products').then(response => {
      setProducts(response.data);
      setFilteredProducrs(response.data);
    })
  }

  useEffect(() => {
    list()
  },[])

  return (

      <div className="container">
        <div className='row' style={{marginTop: '50px'}}>
          <div className='col-3'></div>
          <div className='col'>
            
            <h1 className='text-center'>Electronics Store</h1>

            <br/>

             <form className='float-right' style={{ marginTop: '20px' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchInputChange}
                placeholder='Search Products'
              />{" "}
              &nbsp;
              <button
                className="btn btn-small btn-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
              &nbsp;
            </form>

            <Link to={'create'} className='btn btn-primary' style={{marginTop:'20px', marginLeft: '15px'}}>Add Product</Link>

            {/* {products.map(product => <ProductList key={product.id} product={product} refresh={list}/>)} */}

            {filteredProducrs.length === 0 ? (
              <p>No Products found.</p>
            ) : (
              filteredProducrs.map((product) => (
                <ProductList key={product.id} product={product} refresh={list}/>
              ))
            )}

          </div>
          <div className='col-3'></div>
        </div>
      </div>

  );
}

export default App;



// You need to build a simple product catalog website for an electronics store. The website should allow users to:

// View all products in a list format showing product name, price, category, and available quantity
// Search for products by typing the product name in a search box
// Add new products to the catalog using a form
// Edit existing products to update their details
// Delete products from the catalog with a delete button

// Your website should connect to this API: https://worksheet-catalogue.mashupstack.com/products
// API Endpoints to use:

// Get all products: GET https://worksheet-catalogue.mashupstack.com/products
// Get single product: GET https://worksheet-catalogue.mashupstack.com/products/{id}
// Add new product: POST https://worksheet-catalogue.mashupstack.com/products
// Edit product: PUT https://worksheet-catalogue.mashupstack.com/products/{id}
// Delete product: DELETE https://worksheet-catalogue.mashupstack.com/products/{id}

// Each product has these details:

// name: Product name (like "Wireless Mouse")
// price: Product price (like 525.99)
// category: Product type (like "Electronics")
// quantity: How many items are available (like 100)

// Example product data format:
// json{
//   "name": "Wired Mouse",
//   "price": 365.99,
//   "category": "Electronics",
//   "quantity": 100
// }
// Create a React application with the following pages:

// A main page that shows all products with a search box at the top
// A form page to add new products
// A form page to edit existing products
// Make sure users can delete products and edit products from the main page