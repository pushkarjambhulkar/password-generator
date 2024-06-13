import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charset = '';
    if (includeUppercase) charset += uppercaseChars;
    if (includeLowercase) charset += lowercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSymbols) charset += symbolChars;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  const handleLengthChange = (event) => {
    const length = parseInt(event.target.value);
    setPasswordLength(length);
  };

  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    switch (name) {
      case 'uppercase':
        setIncludeUppercase(checked);
        break;
      case 'lowercase':
        setIncludeLowercase(checked);
        break;
      case 'numbers':
        setIncludeNumbers(checked);
        break;
      case 'symbols':
        setIncludeSymbols(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container mt-5">
          <h1>Password Generator</h1>
          <div className="form-group">
            <label htmlFor="passwordLength">Password Length: </label>
            <input
              type="number"
              id="passwordLength"
              className="form-control"
              value={passwordLength}
              onChange={handleLengthChange}
              min="6"
              max="32"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="includeUppercase"
              className="form-check-input"
              checked={includeUppercase}
              onChange={handleCheckboxChange}
              name="uppercase"
            />
            <label className="form-check-label" htmlFor="includeUppercase">
              Include Uppercase Letters
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="includeLowercase"
              className="form-check-input"
              checked={includeLowercase}
              onChange={handleCheckboxChange}
              name="lowercase"
            />
            <label className="form-check-label" htmlFor="includeLowercase">
              Include Lowercase Letters
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="includeNumbers"
              className="form-check-input"
              checked={includeNumbers}
              onChange={handleCheckboxChange}
              name="numbers"
            />
            <label className="form-check-label" htmlFor="includeNumbers">
              Include Numbers
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="includeSymbols"
              className="form-check-input"
              checked={includeSymbols}
              onChange={handleCheckboxChange}
              name="symbols"
            />
            <label className="form-check-label" htmlFor="includeSymbols">
              Include Symbols
            </label>
          </div>
          <button className="btn btn-primary mb-3" onClick={generatePassword}>
            Generate Password
          </button>
          {password && (
            <div className="alert alert-info" role="alert">
              Generated Password: {password}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
