import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../sass/app.scss';
import UConnect from '../../sass/img/UConnect.png';
import eyeSolid from '../../sass/scss/eye-solid.svg';
import eyeSlashSolid from '../../sass/scss/eye-slash-solid.svg'; 

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/welcome'); 
    };

    return (
        <div className="login-page">
            <div className="left-nav">
                <div className="center-image">
                    <img src={UConnect} alt="UConnect" /> {/* Use the imported image */}
                </div>
            </div>
            <div className="right-nav">
                <div className="login-container">
                    <h1>𝐀𝐃𝐌𝐈𝐍 𝐋𝐎𝐆𝐈𝐍</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">𝚄𝚜𝚎𝚛𝚗𝚊𝚖𝚎</label>
                            <input 
                                type="text" 
                                id="username" 
                                aria-label="Username" 
                                required 
                                className="input-field"
                            />
                        </div>
                        <div className="input-group password-wrapper">
                            <label htmlFor="password">𝙿𝚊𝚜𝚜𝚠𝚘𝚛𝚍</label>
                            <div className="password-container">
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    id="password" 
                                    aria-label="Password" 
                                    required 
                                    className="input-field"
                                />
                                <span 
                                    className="toggle-password" 
                                    onClick={() => setShowPassword(!showPassword)} 
                                    role="button" 
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    <img 
                                        src={showPassword ? eyeSlashSolid : eyeSolid} 
                                        alt={showPassword ? "Hide password" : "Show password"} 
                                        className="password-icon"
                                    />
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="login-button">𝐋𝐎𝐆𝐈𝐍    </button>
                    </form>
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
