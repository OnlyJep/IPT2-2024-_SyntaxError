import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Registration from './Registration'; 
import Schedule from './Schedule';
import Accounts from './Accounts'; 
import ChangePassword from './ChangePassword'; 
import About from './About'; 
import Logout from './Logout'; 

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> 
                <Route path="/dashboard" element={<Dashboard />} /> {}
                <Route path="/registration" element={<Registration />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/accounts" element={<Accounts />} /> 
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/about" element={<About />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
ReactDOM.render(<Routers />, document.getElementById('root'));
}