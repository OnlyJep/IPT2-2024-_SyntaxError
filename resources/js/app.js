import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Adjust the path if necessary
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
