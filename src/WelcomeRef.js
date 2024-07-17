import React from 'react';

const WelcomeRef = ({ userData }) => {
  return <h3>{userData.name ? `Welcome, ${userData.name}! Your email is ${userData.email}` : 'Please log in'}</h3>;
};

export default WelcomeRef;
