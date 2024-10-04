import React from 'react';
import { NavLink } from 'react-router-dom'; // Importing NavLink for navigation
import fsuuLogo from '../../sass/img/fsuu.png'; // Importing the logo
import '../../sass/app.scss'; // Importing the styles

function About() {
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
              <NavLink to="/" activeClassName="active">
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
            <li className="active">
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
          <h1>About Us</h1>
          <div className="admin-info">
            <img src="path_to_avatar.png" alt="Admin Avatar" />
            <span>Jeff Ogabang</span>
          </div>
        </header>

        <section className="content">
          {/* About content goes here */}
          <p>
            Welcome to Father Saturnino Urios University! Our institution is committed to providing high-quality education and fostering academic excellence. We offer a variety of programs to equip our students with the skills they need to succeed in their future careers.
          </p>
          <p>
            Our faculty members are dedicated to ensuring a supportive learning environment, and our campus is equipped with state-of-the-art facilities to enhance the educational experience. Join us as we strive to make a positive impact in our community and beyond.
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;
