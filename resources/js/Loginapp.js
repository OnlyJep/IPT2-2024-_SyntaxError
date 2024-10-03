// resources/js/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Your login component
import Profile from './components/Profile'; // Add a Profile component as well
import 'font-awesome/css/font-awesome.min.css';
import '../sass/app.scss'; // Import your compiled SCSS

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="login-btn">Log In</button>
            </div>
        </div>
    );
};

export default Login;