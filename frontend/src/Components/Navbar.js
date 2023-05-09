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
                <li> {auth ? <Link onClick={logout} to="/logout">Logout</Link> : <Link to="/Signup">Sign Up</Link>}</li>
            </ul>
        </div>
    )
}

export default Navbar;