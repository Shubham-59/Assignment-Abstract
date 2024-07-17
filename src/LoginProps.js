import React, { useState } from 'react';

const LoginProps = ({ setUsername }) => {
  const [name, setName] = useState('');

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

export default LoginProps;
