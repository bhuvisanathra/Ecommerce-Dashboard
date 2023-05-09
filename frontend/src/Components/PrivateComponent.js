import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {

    //To check 
    //Is that data in Local Storage then and then only pages will be shown
    const auth = localStorage.getItem('users');

    //Is there is data in the auth then Outlet will be displayed
    //Else navigate back to SignUP page
    return auth ? <Outlet /> : <Navigate to="/Signup" />;
}

export default PrivateComponent;