import React, { useRef } from 'react';

const LoginRef = ({ setUserData }) => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleLogin = () => {
    setUserData({
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };

  return (
    <div className="login-container">
      <input type="text" ref={nameRef} placeholder="Enter your name" />
      <input type="email" ref={emailRef} placeholder="Enter your email" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginRef;
