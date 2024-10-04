import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink and useNavigate
import fsuuLogo from '../../sass/img/fsuu.png'; // Importing the logo
import '../../sass/app.scss'; // Importing the styles

function Logout() {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleLogout = () => {
    // Add logout logic here (like clearing tokens or user session)
    // Example: localStorage.removeItem('token');
    navigate('/'); // Redirect to home after logout
  };

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
              <NavLink to="/dashboard" activeClassName="active">
                <i className="fa-solid fa-cloud"></i> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/registration" activeClassName="active">
                <i className="fa-solid fa-address-card"></i> Registration
              </NavLink>
            </li>
            <li className="active">
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
          <h1>Logout</h1>
          <div className="admin-info">
            <img src="path_to_avatar.png" alt="Admin Avatar" />
            <span>Jeff Ogabang</span>
          </div>
        </header>

        <section className="content">
          <h2>Are you sure you want to logout?</h2>
          <button onClick={handleLogout} className="logout-button">
            Yes, Logout
          </button>
        </section>
      </main>
    </div>
  );
}

export default Logout;
