import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [pin, setPin] = useState(new Array(3).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>LOGIN</h1>
        <p>Enter the OTP we just sent to you</p>
      </div>
      <div className='container'>
        {pin.map((data, index) => {
          return (
            <input
              type='number'
              maxlength='1'
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <div className='footer'>
        <button onClick={(e) => setPin([...pin.map((v) => '')])}>Clear</button>
        <button>Verify</button>
      </div>
    </div>
  );
}

export default App;
