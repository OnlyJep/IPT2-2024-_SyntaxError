import React from 'react';
import fsuuLogo from '../../sass/img/fsuu.png'; // Importing the logo
import '../../sass/app.scss'; // Importing the styles
import { NavLink } from 'react-router-dom'; // Importing NavLink for navigation

function Schedule() {
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
          <h1>Schedule</h1>
          <div className="admin-info">
            <img src="path_to_avatar.png" alt="Admin Avatar" />
            <span>Jeff Ogabang</span>
          </div>
        </header>

        <section className="content">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
            </thead>
            <tbody>
              {[
                '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
                '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
                '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
                '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
                '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
              ].map((time, index) => (
                <tr key={index}>
                  <td>{time}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Schedule;
