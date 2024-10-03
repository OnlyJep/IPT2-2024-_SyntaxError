// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; 
import Profile from './components/profiling'; 
import NewPass from './components/newpass'; // Import the new pass component
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} /> {/* Profile route */}
                <Route path="/newpass" element={<NewPass />} /> {/* New Password route */}
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
