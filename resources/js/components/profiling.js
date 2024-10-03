import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaListAlt, FaInfoCircle, FaSignOutAlt, FaCalendar } from 'react-icons/fa';
import '../../sass/app.scss';

function Navbar() {
    const [showEvents, setShowEvents] = useState(false);

    // Sample events data with Facebook image URL
    const events = [
        { id: 1, name: 'MIDTERM EXAM', date: '2024-10-10', image: 'https://scontent.fbxu1-1.fna.fbcdn.net/v/t39.30808-6/461581026_909479287870172_356603662978175704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF8FxdZsP-hH0KLxaC0Ee_lTRyahSaaFmdNHJqFJpoWZ-nSzUHIb3eKVKy5V3VqFOtQaf4W6g6m7hauu0IIPdAu&_nc_ohc=ZSpNV1Yk_YcQ7kNvgEYF4I5&_nc_ht=scontent.fbxu1-1.fna&_nc_gid=AwvJqGVF6xnXgjVspioXEGd&oh=00_AYA-ZdLUulR1HXVzFpjKlcKNwQD0PHiXOQVwSCJIMKLsIQ&oe=67033685' },
        // Add more events with their respective URLs as needed
    ];

    const closeEventBoard = () => {
        const eventBoard = document.querySelector('.event-board');
        eventBoard.classList.add('hidden'); // Start fade-out animation
        
        // Wait for the transition to complete, then hide the event board
        setTimeout(() => {
            setShowEvents(false); // Update the state to hide the event board
        }, 500); // Match this time with the CSS transition duration
    };

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-icons">
                    <li><a href="/profile"><FaUser title="Profile" /></a></li>
                    <li><a href="/schedule"><FaCalendarAlt title="Schedule" /></a></li>
                    <li><a href="/grades"><FaListAlt title="Grades" /></a></li>
                    <li><a href="/about-us"><FaInfoCircle title="About Us" /></a></li>
                    <li><a href="/logout"><FaSignOutAlt title="Logout" /></a></li>
                    <li><a onClick={() => setShowEvents(true)}><FaCalendar title="Events" style={{ color: 'white' }} /></a></li>
                </ul>
            </nav>

            {/* Event Board Modal */}
            {showEvents && (
                <div className="event-board">
                    <div className="event-board-content">
                        <button onClick={closeEventBoard} className="close-btn">X</button> {/* Small close button */}
                        <h2>Upcoming Events</h2>
                        <ul>
                            {events.map(event => (
                                <li key={event.id}>
                                    <img src={event.image} alt={event.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                                    {event.name} - {event.date}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
