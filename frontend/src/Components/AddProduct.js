import React, { useState } from 'react';

const AddProduct = () => {

    const [name, setName] = React.useState('');
    const [Price, setPrice] = React.useState('');
    const [Category, setCategory] = React.useState('');
    const [Company, setCompany] = React.useState('');
    const [error, setError] = React.useState('false');

    const addProduct = async () => {
        if (!name || !Price || !Category || !Company) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('users'))._id;
        console.log(userId);
        let result = await fetch('https://e-commerce-dashboard-6qk3.onrender.com/add-product', {
            method: 'POST',
            body: JSON.stringify({ name, Price, Category, Company, userId }),
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
                value={Price}
                onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !Price && <span className='errorMessage'>Enter Valid Price</span>}

            <input
                type='text'
                placeholder='Enter Product Category'
                className='inputbox'
                onChange={(e) => { setCategory(e.target.value) }}
                value={Category}
            />
            {error && !Category && <span className='errorMessage'>Enter Valid Category</span>}

            <input
                type='text'
                placeholder='Enter Product Company'
                className='inputbox'
                onChange={(e) => { setCompany(e.target.value) }}
                value={Company}
            />
            {error && !Company && <span className='errorMessage'>Enter Valid Company-Name</span>}

            <button
                onClick={addProduct}
                className='inputbox'>Add Product</button>
        </div>
    )
}

export default AddProduct;