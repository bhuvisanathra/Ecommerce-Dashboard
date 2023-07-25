import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {

    const [name, setName] = React.useState('');
    const [Price, setPrice] = React.useState('');
    const [Category, setCategory] = React.useState('');
    const [Company, setCompany] = React.useState('');
    const [error, setError] = React.useState('false');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // console.warn(params);
        getProductDetails();
    }, [])


    const getProductDetails = async () => {
        // console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name)
        setPrice(result.Price)
        setCategory(result.Category)
        setCompany(result.Company)
    }

    const updateProduct = async () => {
        // console.log(name, Price, Category, Company);

        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, Price, Category, Company }),
            headers: { 'Content-Type': 'application/json' }
        });
        result = await result.json();
        console.log(result);
        navigate('/')
    }
    return (
        <div className='signupclass'>
            <h1 className='inputbox'>Update Product Details</h1>
            <input
                type='text'
                placeholder='Enter Product Name'
                className='inputbox'
                onChange={(e) => { setName(e.target.value) }}
                value={name}
            />

            <input
                type='text'
                placeholder='Enter Product Price'
                className='inputbox'
                value={Price}
                onChange={(e) => { setPrice(e.target.value) }}
            />

            <input
                type='text'
                placeholder='Enter Product Category'
                className='inputbox'
                onChange={(e) => { setCategory(e.target.value) }}
                value={Category}
            />

            <input
                type='text'
                placeholder='Enter Product Company'
                className='inputbox'
                onChange={(e) => { setCompany(e.target.value) }}
                value={Company}
            />

            <button
                onClick={updateProduct}
                className='inputbox'>Update Product</button>
        </div>
    )
}

export default UpdateProduct;