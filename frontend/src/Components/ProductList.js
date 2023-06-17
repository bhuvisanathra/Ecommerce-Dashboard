import React, { useEffect, useState } from 'react';

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
    console.log("Product:", products);

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

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <ul>
                <li>Sr NO</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.Price}</li>
                        <li>{item.Category}</li>
                        <li>{item.Company}</li>
                        <li><button className='DeleteButton' onClick={() => deleteProduct(item._id)}>Delete</button></li>
                    </ul>
                )
            }
        </div>
    )
}

export default ProductList;

