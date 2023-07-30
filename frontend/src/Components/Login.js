import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    useEffect(() => {
        const auth = localStorage.getItem('users');
        if (auth) {
            navigate('/');
        }
    })

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log("Email: " + email + " Password: " + password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);

        if (!result.name) {
            alert('Enter Correct Credentials');
        } else {
            localStorage.setItem("users", JSON.stringify(result));
            navigate("/");
        }
    }

    return (
        <div className="signupclass">

            <h1 className="inputbox h1">Login</h1>
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
                onClick={handleLogin}
                className="inputbox"
                type="submit">
                Submit
            </button>

        </div>

    )
}

export default Login;