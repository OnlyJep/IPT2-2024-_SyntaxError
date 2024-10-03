import React, { useState } from 'react';
import '../../sass/app.scss';
import eyeSolid from '../../sass/scss/eye-solid.svg';
import eyeSlashSolid from '../../sass/scss/eye-slash-solid.svg'; 

const NewPass = () => {
    const [showPassword, setShowPassword] = useState(false); 
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password change logic here
    };

    return (
        <div className="newpass-page">
            <h1>𝙲𝚑𝚊𝚗𝚐𝚎 𝙿𝚊𝚜𝚜𝚠𝚘𝚛𝚍</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group password-wrapper">
                    <label htmlFor="current-password">𝙲𝚞𝚛𝚛𝚎𝚗𝚝 𝙿𝚊𝚜𝚜𝚠𝚘𝚛𝚍</label>
                    <div className="password-container">
                        <input 
                            type={showPassword ? "text" : "password"}
                            id="current-password" 
                            aria-label="Current Password" 
                            required 
                            className="input-field"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
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
                <div className="input-group">
                    <label htmlFor="new-password">𝙽𝚎𝚠 𝙿𝚊𝚜𝚜𝚠𝚘𝚛𝚍</label>
                    <input 
                        type={showPassword ? "text" : "password"}
                        id="new-password" 
                        aria-label="New Password" 
                        required 
                        className="input-field"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">𝙲𝚘𝚗𝚏𝚒𝚛𝚖 𝙿𝚊𝚜𝚜𝚠𝚘𝚛𝚍</label>
                    <input 
                        type={showPassword ? "text" : "password"}
                        id="confirm-password" 
                        aria-label="Confirm Password" 
                        required 
                        className="input-field"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Confirm 𝙲𝚑𝚊𝚗𝚐𝚎</button>
            </form>
        </div>
    );
};

export default NewPass;
