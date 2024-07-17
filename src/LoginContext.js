import React, { useState, useContext } from 'react';
import { UserContext } from './App';

const LoginContext = () => {
  const [name, setName] = useState('');
  const { setUsername } = useContext(UserContext);

  const handleLogin = () => {
    setUsername(name);
  };

  return (
    <div className="login-container">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginContext;
