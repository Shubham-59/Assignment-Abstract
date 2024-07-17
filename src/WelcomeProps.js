import React from 'react';

const WelcomeProps = ({ username }) => {
  return <h3>{username ? `Welcome, ${username}!` : 'Please log in'}</h3>;
};

export default WelcomeProps;
