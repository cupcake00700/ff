import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const correctUsername = 'utsav';
    const correctPassword = '123';

    if (username === correctUsername && password === correctPassword) {
      navigate('/home');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div>
      <div className="back">
        <div className="formtop">
          <div className="logotop"></div>
          <h2 id="heading">Welcome to Footwear Fusion</h2>
          <br />
          <form action="#" method="post" onSubmit={handleLogin}>
            <p id="para1">User Name:</p>
            <input id="inp1"
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <p id="para2">Password:</p>
            <input id="inp2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button id="bu1" type="submit">Login</button>
            <button id="bu2" type="button" onClick={()=>{navigate('/regform')}}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
