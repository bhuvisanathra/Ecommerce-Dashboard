import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //This effect will check
    //If There is user stored in localstorage then
    //User cannot redirect again to Signup Page

    useEffect(() => {
        const auth = localStorage.getItem('users');
        if (auth) {
            navigate('/');
        }
    })

    const collectData = async (e) => {
        console.log(userName, email, password);
        //Fetch is used to retrieve the APIs from the backend
        const result = await fetch('http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ userName, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let results = await result.json()
        console.log(results);
        localStorage.setItem("users", JSON.stringify(results));
        navigate('/')

    }

    return (
        <div className="signupclass">

            <h1 className="inputbox h1">Registration</h1>

            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="inputbox"
                type="text"
                placeholder="Enter Username" />


            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="inputbox"
                type="email"
                placeholder="Enter Email" />


            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="inputbox"
                type="password"
                placeholder="Enter Password" />


            <button
                onClick={collectData}
                className="inputbox"
                type="submit">
                Submit
            </button>

        </div>
    )
}
export default Signup;