import './App.css';
import { useState } from 'react';
import UserPassFields from './components/UserPassFields';
import LoginButton from './components/LoginButton';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const LogIn = ({ loggedIn }) => {
    return loggedIn ? (
      <Dashboard />
    ) : (
      <div>
        <UserPassFields />
      </div>
    );
  };

  return (
    <>
      <LogIn loggedIn={loggedIn} />
      <LoginButton loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default App;
