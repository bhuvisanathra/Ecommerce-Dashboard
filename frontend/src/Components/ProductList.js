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

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <ul>
                <li>Sr NO</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }
        </div>
    )
}

export default ProductList;

