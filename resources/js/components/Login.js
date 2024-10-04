import React, { useState } from 'react';
import '../../sass/scss/Login/LoginButton.scss';
import '../../sass/scss/Login/LoginContainer.scss';
import '../../sass/scss/Login/LoginForgot.scss';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dummy login validation for now (you can replace this with your real validation later)
        if (username === 'admin' && password === 'password') {
            alert('Welcome, Admin!');
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit">Log In</button>
                <p className="forgot-password">
                    <span>Forgot your password? </span>
                    <a href="/reset-password" className="click-here">Click here.</a>
                </p>
            </form>
        </div>
    );
}

export default AdminLogin;
