import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../sass/scss/Login/LoginButton.scss';
import '../../sass/scss/Login/LoginContainer.scss';
import '../../sass/scss/Login/LoginForgot.scss';
import '../../sass/scss/Login/LoginAlert.scss'; // Import the CSS for the alert
import fsuuLogo from '../../sass/img/fsuu.png'; // Corrected path to fsuu.png

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'test') {
            setSuccessMessage('Welcome, Admin! Redirecting to the dashboard...');
            setErrorMessage('');
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } else {
            setSuccessMessage('');
            setErrorMessage('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            {successMessage && (
                <div className="success-alert">
                    {successMessage}
                </div>
            )}

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

            {/* Copyright Section */}
            <div className="copyright-container">
                <img src={fsuuLogo} alt="FSUU Logo" className="fsuu-logo" />
                <p>© 2024 Urian Connect. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default AdminLogin;
