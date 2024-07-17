import React, { useContext } from 'react';
import { UserContext } from './App';

const WelcomeContext = () => {
  const { username } = useContext(UserContext);

  return <h3>{username ? `Welcome, ${username}!` : 'Please log in'}</h3>;
};

export default WelcomeContext;
