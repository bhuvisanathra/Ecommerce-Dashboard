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
            <img
                alt='Logo'
                className='logoImg'
                src='https://www.adobe.com/express/create/logo/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium'
            />
            {
                auth ?
                    <ul className='nav-ul'>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update">Update Products</Link></li>
                        <li><Link to="/remove">Remove Products</Link></li>
                        <li><Link to="/Profile">My Profile</Link></li>
                        <li><Link onClick={logout} to="/Signup">Logout ({JSON.parse(auth).name})</Link></li>
                        {
                            console.log(JSON.parse(auth))
                        }
                    </ul>
                    : <ul className='nav-ul'>
                        <li><Link to="/Signup">Sign Up</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
            }
        </div>
    )
}

export default Navbar;