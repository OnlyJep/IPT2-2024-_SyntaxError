import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration'; 
import Schedule from './components/Schedule';
import Accounts from './components/Accounts'; 
import ChangePassword from './components/ChangePassword'; 
import About from './components/About'; 
import Logout from './components/Logout'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/accounts" element={<Accounts />} /> {/* Ensure this path is correct */}
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/about" element={<About />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
