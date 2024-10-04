import React from 'react';
import { NavLink } from 'react-router-dom'; // Importing NavLink for navigation
import fsuuLogo from '../../sass/img/fsuu.png'; // Importing the logo
import '../../sass/app.scss'; // Importing the registration table styles

function Registration() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src={fsuuLogo} alt="FSUU Logo" /> {/* Using imported logo */}
          <h2>Father Saturnino Urios University</h2>
        </div>
        {/* Navigation Menu */}
        <nav className="menu">
          <ul>
            <li>
              <NavLink to="/dashboard" activeClassName="active">
                <i className="fa-solid fa-cloud"></i> Dashboard
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/registration" activeClassName="active">
                <i className="fa-solid fa-address-card"></i> Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="/schedule" activeClassName="active">
                <i className="fa-solid fa-calendar-days"></i> Schedule
              </NavLink>
            </li>
            <li>
              <NavLink to="/accounts" activeClassName="active">
                <i className="fa-solid fa-user"></i> Accounts
              </NavLink>
            </li>
            <li>
              <NavLink to="/change-password" activeClassName="active">
                <i className="fa-solid fa-unlock"></i> Change Password
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                <i className="fa-solid fa-circle-info"></i> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeClassName="active">
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header>
          <h1>Registration</h1>
          <div className="admin-info">
            <img src="path_to_avatar.png" alt="Admin Avatar" /> {/* Placeholder for admin avatar */}
            <span>Jeff Ogabang</span>
          </div>
        </header>
        
        {/* Main Content Section */}
        <section className="content">
          <table className="registration-table">
            <thead>
              <tr>
                <th>Student No</th>
                <th>Student Name</th>
                <th>Year Level</th>
                <th>Course</th>
                <th>Status</th>
                <th>School Year</th>
                <th>Section</th>
                <th>Semester</th>
                <th>Actions</th> {/* New Actions column */}
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr>
                <td>2023001</td>
                <td>John Doe</td>
                <td>2nd Year</td>
                <td>Computer Science</td>
                <td>OLD (Regular) (15 Unit(s) Allowed)</td>
                <td>2024-2025</td>
                <td>BSCS-2A</td>
                <td>1st Semester</td>
                <td>
                  <button className="view-button">View</button> {/* View button */}
                </td>
              </tr>
              {/* Add more rows dynamically as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Registration;
