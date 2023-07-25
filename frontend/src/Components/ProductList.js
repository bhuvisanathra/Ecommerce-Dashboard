import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    //Getter Setter
    const [products, setproducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setproducts(result);
    }
    // console.log("Product:", products);

    const deleteProduct = async (id) => {
        // console.log(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setproducts(result);
            }
        } else {
            getProducts();
        }
    };

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <input className="inputBoxSearch" type="text" placeholder='Search for products' onChange={searchHandle} />
            <ul>
                <li>Sr NO</li>
                <li className='nameList'>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul>
                        <li>{index + 1}</li>
                        <li className='nameList'>{item.name}</li>
                        <li>{item.Price}</li>
                        <li>{item.Category}</li>
                        <li>{item.Company}</li>
                        <li>
                            <button className='DeleteButton' onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id} className='fontcorrection'><button className='DeleteButton'>Update</button></Link>
                        </li>
                    </ul>
                ) : <h1>No Data Found</h1>
            }
        </div>
    )
}

export default ProductList;

