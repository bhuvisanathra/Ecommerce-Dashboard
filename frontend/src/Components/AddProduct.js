import React, { useState } from 'react';

const AddProduct = () => {

    const [name, setName] = React.useState('');
    const [Price, setPrice] = React.useState('');
    const [Category, setCategory] = React.useState('');
    const [Company, setCompany] = React.useState('');

    const addProduct = () => {
        console.log(name + " " + Price + " " + Category + " " + Company)
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
                onClick={addProduct}
                className='inputbox'>Add Product</button>
        </div>
    )
}

export default AddProduct;