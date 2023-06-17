import React, { useState } from 'react';

const AddProduct = () => {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState('false');

    const addProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('users'))._id;
        console.log(userId);
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    }

    return (
        <div className='signupclass'>
            <h1 className='inputbox'>Enter Product Details</h1>
            <input
                type='text'
                placeholder='Enter Product Name'
                className='inputbox'
                onChange={(e) => { setName(e.target.value) }}
                value={name}
            />
            {error && !name && <span className='errorMessage'>Enter Valid Product-Name</span>}

            <input
                type='text'
                placeholder='Enter Product Price'
                className='inputbox'
                value={price}
                onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className='errorMessage'>Enter Valid Price</span>}

            <input
                type='text'
                placeholder='Enter Product Category'
                className='inputbox'
                onChange={(e) => { setCategory(e.target.value) }}
                value={category}
            />
            {error && !category && <span className='errorMessage'>Enter Valid Category</span>}

            <input
                type='text'
                placeholder='Enter Product Company'
                className='inputbox'
                onChange={(e) => { setCompany(e.target.value) }}
                value={company}
            />
            {error && !company && <span className='errorMessage'>Enter Valid Company-Name</span>}

            <button
                onClick={addProduct}
                className='inputbox'>Add Product</button>
        </div>
    )
}

export default AddProduct;