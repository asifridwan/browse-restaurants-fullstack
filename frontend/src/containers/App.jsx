import { useState } from "react";
import axios from "axios";

import Login from "../components/Login";
import Register from "../components/Register";
import BrowseRestaurants from "./BrowseRestaurants";
import Saved from "./Saved";

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  function SwitchToRegister() {
    setShowLogin(false);
    setShowRegister(true);
    setErrorMessage('');
    setUsername('');
    setPassword('');
  }

  function SwitchToLogin() {
    setShowRegister(false);
    setShowLogin(true);
    setErrorMessage('');
    setUsername('');
    setEmail('');
    setPassword('');
  }

  function SwitchToSaved() {
    setShowApp(false);
    setShowSaved(true);
  }

  function SwitchToApp() {
    setShowSaved(false);
    setShowApp(true);
  }

  function LoginUser() {
    axios.post('http://localhost:4000/login', {
      username: username,
      password: password
    }).then(response => {
      if (response.data === 'Success') {
        setShowLogin(false);
        setShowApp(true);
      }
      else {
        setErrorMessage(response.data);
      }
    });
  }

  function RegisterUser() {
    axios.post('http://localhost:4000/register', {
      username: username,
      email: email,
      password: password
    }).then(response => {
      if (response.data === 'Success') {
        setShowRegister(false);
        setShowApp(true);
      }
      else {
        setErrorMessage(response.data);
      }
    })
  }

  function LogoutUser() {
    setShowApp(false);
    setShowLogin(true);
    setUsername('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
  }
  
  return (
    <>
      {showLogin && <Login switchToRegister={SwitchToRegister} username={e => setUsername(e.target.value)} password={e => setPassword(e.target.value)} onSubmit={LoginUser} errorMessage={errorMessage} />}
      {showRegister && <Register switchToLogin={SwitchToLogin} username={e => setUsername(e.target.value)} email={e => setEmail(e.target.value)} password={e => setPassword(e.target.value)} onSubmit={RegisterUser} errorMessage={errorMessage} />}
      {showApp && <BrowseRestaurants username={username} onSaved={SwitchToSaved} onLogout={LogoutUser} />}
      {showSaved && <Saved back={SwitchToApp} />}
    </>
  )
}

export default App;