import { useEffect, useState } from "react";
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

  useEffect(() => {
    const login_state = sessionStorage.getItem("login-state");
    const register_state = sessionStorage.getItem("register-state");
    const app_state = sessionStorage.getItem("app-state");
    const user_name = sessionStorage.getItem("username");

    if (login_state) {
      setShowLogin(JSON.parse(login_state));
    }

    if (register_state) {
      setShowRegister(JSON.parse(register_state));
    }

    if (app_state) {
      setShowApp(JSON.parse(app_state));
    }

    if (user_name) {
      setUsername(JSON.parse(user_name));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("login-state", JSON.stringify(showLogin));
    sessionStorage.setItem("register-state", JSON.stringify(showRegister));
    sessionStorage.setItem("app-state", JSON.stringify(showApp));
    sessionStorage.setItem("username", JSON.stringify(username));
  }, [username, showLogin, showRegister, showApp]);

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