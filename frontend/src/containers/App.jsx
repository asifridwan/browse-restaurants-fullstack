import { useState } from "react";
import axios from "axios";

import Login from "../components/Login";
import Register from "../components/Register";
import MainApp from "./MainApp";

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showApp, setShowApp] = useState(false);

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
      {showApp && <MainApp username={username} onLogout={LogoutUser} />}
    </>
  )
}

export default App;