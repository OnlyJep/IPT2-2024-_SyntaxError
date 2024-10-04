import React from 'react';
import fsuuLogo from '../../sass/img/fsuu.png'; // Importing the logo
import '../../sass/app.scss'; // Importing the styles
import { NavLink } from 'react-router-dom'; // Importing NavLink for navigation

function Accounts() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={fsuuLogo} alt="FSUU Logo" />
          <h2>Father Saturnino Urios University</h2>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="fa-solid fa-cloud"></i> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/registration" className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="fa-solid fa-address-card"></i> Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="fa-solid fa-calendar-days"></i> Schedule
              </NavLink>
            </li>
            <li>
              <NavLink to="/accounts" className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="fa-solid fa-user"></i> Accounts
              </NavLink>
            </li>
            <li>
              <NavLink to="/change-password" className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="fa-solid fa-unlock"></i> Change Password
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="fa-solid fa-circle-info"></i> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" className={({ isActive }) => (isActive ? "active" : "")}>
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Accounts</h1>
          <div className="admin-info">
            <img src="path_to_avatar.png" alt="Admin Avatar" />
            <span>Jeff Ogabang</span>
          </div>
        </header>

        <section className="content">
          {/* Account settings content goes here */}
          <p>Your account information will be displayed here.</p>
        </section>
      </main>
    </div>
  );
}

export default Accounts;
