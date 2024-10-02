import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; 
import Profile from './components/profiling'; 
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} /> {/* Profile route */}
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
