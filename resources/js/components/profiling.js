import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../sass/app.scss'; // Assuming you have your CSS here

function ProfilingForm() {
    const [step, setStep] = useState(1); // Step starts at 1 (initial form)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        navigate('/success');
    };

    return (
        <div className="profiling-container">
            <h2>STUDENT PROFILE</h2>
            <form onSubmit={handleSubmit}>
                {/* First Form - Student Info, Elementary, Junior High, Senior High, College, and Master's Degree */}
                <div className="form-grid">
                    {/* Student Info */}
                    <div className="form-group">
                        <label htmlFor="family-name">* Family Name</label>
                        <input type="text" id="family-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="given-name">Given Name</label>
                        <input type="text" id="given-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="middle-name">Middle Name</label>
                        <input type="text" id="middle-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">* Date of Birth</label>
                        <input type="date" id="dob" required />
                    </div>

                    {/* Address Info */}
                    <div className="form-group">
                        <label htmlFor="place-of-birth">* Place of Birth</label>
                        <input type="text" id="place-of-birth" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">House#/Street Name & Barangay</label>
                        <input type="text" id="address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="region">Region</label>
                        <input type="text" id="region" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="province">Province</label>
                        <input type="text" id="province" />
                    </div>

                    {/* Contact Info */}
                    <div className="form-group">
                        <label htmlFor="municipality">Municipality</label>
                        <input type="text" id="municipality" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="religion">Religion</label>
                        <input type="text" id="religion" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="citizenship">Citizenship</label>
                        <input type="text" id="citizenship" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-number">Contact Number(s)</label>
                        <input type="tel" id="contact-number" />
                    </div>

                    {/* Language & Email */}
                    <div className="form-group">
                        <label htmlFor="language-spoken">Language Spoken</label>
                        <input type="text" id="language-spoken" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" />
                    </div>
                </div>

                {/* School Last Attended in Elementary */}
                <h3>SCHOOL LAST ATTENDED IN ELEMENTARY</h3>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="school-name">Name of School</label>
                        <input type="text" id="school-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="school-address">Address</label>
                        <input type="text" id="school-address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year-graduated">Year Graduated</label>
                        <input type="text" id="year-graduated" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type-of-school">Type of School</label>
                        <input type="text" id="type-of-school" />
                    </div>
                </div>

                {/* School Last Attended in Junior High School */}
                <h3>SCHOOL LAST ATTENDED IN JUNIOR HIGH SCHOOL</h3>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="junior-school-name">Name of School</label>
                        <input type="text" id="junior-school-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="junior-school-address">Address</label>
                        <input type="text" id="junior-school-address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="junior-year-graduated">Year Graduated</label>
                        <input type="text" id="junior-year-graduated" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="junior-type-of-school">Type of School</label>
                        <input type="text" id="junior-type-of-school" />
                    </div>
                </div>

                {/* School Last Attended in Senior High School */}
                <h3>SCHOOL LAST ATTENDED IN SENIOR HIGH SCHOOL</h3>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="senior-school-name">Name of School</label>
                        <input type="text" id="senior-school-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senior-school-address">Address</label>
                        <input type="text" id="senior-school-address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senior-year-graduated">Year Graduated</label>
                        <input type="text" id="senior-year-graduated" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senior-type-of-school">Type of School</label>
                        <input type="text" id="senior-type-of-school" />
                    </div>
                </div>

                {/* New Section - School Last Attended in College and Master's Degree */}
                <h3>SCHOOL LAST ATTENDED IN COLLEGE AND MASTER'S DEGREE SCHOOL</h3>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="college-school-name">Name of School</label>
                        <input type="text" id="college-school-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="college-school-address">Address</label>
                        <input type="text" id="college-school-address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="college-year-graduated">Year Graduated</label>
                        <input type="text" id="college-year-graduated" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="college-type-of-school">Type of School</label>
                        <input type="text" id="college-type-of-school" />
                    </div>
                </div>

                {/* Buttons */}
                <div className="form-footer">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ProfilingForm;
