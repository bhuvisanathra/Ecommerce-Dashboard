import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const auth = localStorage.getItem('users');
    const Navigate = useNavigate();

    //Logout Function
    //Remove data from Local Storage
    const logout = () => {
        localStorage.clear();
        Navigate("/SignUp");
    }
    return (
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/remove">Remove Products</Link></li>
                <li><Link to="/Profile">My Profile</Link></li>
                {
                    auth ?
                        <li><Link onClick={logout} to="/Signup">Logout</Link></li>
                        : <>
                            <li><Link to="/Signup">Sign Up</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </>

                }
            </ul>
        </div>
    )
}

export default Navbar;