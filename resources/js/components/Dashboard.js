import React from 'react';
import { NavLink } from 'react-router-dom'; // Importing NavLink for navigation
import fsuuLogo from '../../sass/img/fsuu.png'; // Importing the logo
import '../../sass/app.scss'; // Importing the styles

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src={fsuuLogo} alt="FSUU Logo" />
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
            <li>
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
      <main className="main-content">
        <header>
          <h1>Dashboard</h1>
          <div className="admin-info">
            <img src="path_to_avatar.png" alt="Admin Avatar" /> {/* Placeholder for admin avatar */}
            <span>Jeff Ogabang</span>
          </div>
        </header>
        
        {/* Main Content Section */}
        <section className="content">
          {/* Content goes here */}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
