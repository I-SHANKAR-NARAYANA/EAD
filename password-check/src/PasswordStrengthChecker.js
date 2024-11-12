import React, { useState, useEffect } from 'react';
import './PasswordStrength.css';  // Import CSS for styling

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  useEffect(() => {
    checkPasswordStrength(password)
  }, [password]);

  const checkPasswordStrength = (pwd) => {
    let strengthLevel = 0;

    if (pwd.length >= 8) strengthLevel += 1; 
    if (/[A-Z]/.test(pwd)) strengthLevel += 1; 
    if (/[a-z]/.test(pwd)) strengthLevel += 1; 
    if (/[0-9]/.test(pwd)) strengthLevel += 1; 
    if (/[^A-Za-z0-9]/.test(pwd)) strengthLevel += 1;

    switch (strengthLevel) {
      case 0:
        setStrength('');
        break;
      case 1:
        setStrength('Very Weak');
        break;
      case 2:
        setStrength('Weak');
        break;
      case 3:
        setStrength('Moderate');
        break;
      case 4:
        setStrength('Strong');
        break;
      case 5:
        setStrength('Very Strong');
        break;
      default:
        setStrength('');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  return (
    <div className="password-checker-container">
      <h1>Password Strength Checker</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        className="password-input"
      />
      <div className={`strength-indicator ${strength.toLowerCase()}`}>
        {strength && <p>Password Strength: {strength}</p>}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;