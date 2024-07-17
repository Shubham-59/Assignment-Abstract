import React, { useState, createContext } from 'react';
import './App.css';
import LoginProps from './LoginProps';
import WelcomeProps from './WelcomeProps';
import LoginContext from './LoginContext';
import WelcomeContext from './WelcomeContext';
import RegistrationClass from './RegistrationClass';
import RegistrationFunction from './RegistrationFunction';
import LoginRef from './LoginRef';
import WelcomeRef from './WelcomeRef';
import TitleUpdater from './TitleUpdater';

export const UserContext = createContext();

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({});

  return (
    <div className="container">
      <h1>React Assignment 02</h1>

      {/* Using Props */}
      <h2>Using Props</h2>
      <LoginProps setUsername={setUsername} />
      <WelcomeProps username={username} />

      {/* Using Context */}
      <h2>Using Context</h2>
      <UserContext.Provider value={{ username, setUsername }}>
        <LoginContext />
        <WelcomeContext />
      </UserContext.Provider>

      {/* Registration Form using Class Component */}
      <h2>Registration Form (Class Component)</h2>
      <RegistrationClass />

      {/* Registration Form using Function Component */}
      <h2>Registration Form (Function Component)</h2>
      <RegistrationFunction />

      {/* Login using Ref and pass values to Welcome */}
      <h2>Login using Ref</h2>
      <LoginRef setUserData={setUserData} />
      <WelcomeRef userData={userData} />

      <header className="App-header">
        <h2>React Page Title Updater</h2>
        <TitleUpdater />
      </header>
    </div>
  );
};

export default App;
